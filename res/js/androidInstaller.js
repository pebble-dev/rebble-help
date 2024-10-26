let webusb = null;
let adb = null;
const statusText = document.getElementById("status_text");

async function init() {
    try {
        return await Adb.open("WebUSB");
    } catch (error) {
        handleError("Failed to initialize WebUSB", error);
    }
}

async function connectDevice(webusb) {
    if (webusb.isAdb()) {
        try {
            let adb = await webusb.connectAdb("host::", alert(`Please check the screen of your ${webusb.device.productName}.`));
            return adb;
        } catch (error) {
            handleError("Failed to connect to device", error);
        }
    }
    return null;
}

async function runShell(adb, command) {
    try {
        let shell = await adb.shell(command);
        let output = await shell.receive();
        return new TextDecoder().decode(output.data);
    } catch (error) {
        handleError("Failed to run shell command", error);
    }
    return null;
}

async function installApk(adb, apk) {
    try {
        updateStatus("Pushing APK to device...");
        let sync = await adb.sync();
        let start = Date.now();
        await sync.push(apk, "/data/local/tmp/pebble-4.4.3.apk", "0644", (bytesTransferred, totalBytes) => {
            let progress = (bytesTransferred / totalBytes) * 100;
            updateStatus(`Pushing APK to device... ${progress.toFixed(2)}%`);
        });
        updateStatus(`APK pushed! (Took ${Date.now() - start}ms)`);

        start = Date.now();
        updateStatus("Installing APK...");
        await runShell(adb, "pm install --bypass-low-target-sdk-block /data/local/tmp/pebble-4.4.3.apk");
        updateStatus(`APK installed! (Took ${Date.now() - start}ms)`);

        updateStatus("Opening Pebble app...");
        await runShell(adb, "monkey -p com.getpebble.android.basalt -c android.intent.category.LAUNCHER 1");
        updateStatus("All Done!");
    } catch (error) {
        handleError("Failed to install APK", error);
        alert("Failed to install! Please try the manual installation method. If that doesn't work, please send a message at https://rebble.io/discord.");
    }
}

async function downloadApk() {
    updateStatus("Downloading APK from binaries.rebble.io...");
    try {
        let response = await fetch("https://binaries.rebble.io/apks/pebble-4.4.3.apk", {
            method: "GET",
            headers: {
                "Content-Type": "application/vnd.android.package-archive",
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let blob = await response.blob();
        updateStatus("APK downloaded!");
        return blob;
    } catch (error) {
        handleError("Failed to download APK", error);
        throw error;
    }
}

async function install() {
    try {
        let apk = await downloadApk();
        await installApk(adb, apk);
        nextStep();
    } catch (error) {
        console.error(error);
    }
}

function nextStep() {
    const currentStep = document.querySelector('.active');
    currentStep.classList.add('completed');
    currentStep.classList.remove('active');
    let nextStep = currentStep.nextElementSibling;
    if (!nextStep) {
        nextStep = document.querySelector('.step:not(.completed)');
    }
    if (nextStep) {
        nextStep.classList.remove('upcoming', 'inactive');
        currentStep.classList.add('inactive');
        nextStep.classList.add('active');
        const buttons = nextStep.querySelectorAll('button');
        buttons.forEach(button => button.disabled = false);
        nextStep.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function updateStatus(message) {
    statusText.innerText = message;
}

function handleError(message, error) {
    console.error(message, error);
    updateStatus(`${message}: ${error.message}`);
}

function createAlert(message) {
    const alert = document.createElement("alert");
    alert.innerHTML = message;
    const installer = document.getElementById("android_installer");
    installer.innerHTML = "";
    installer.appendChild(alert);
    installer.hidden = false;
}

document.getElementById("connect").onclick = async () => {
    webusb = await init();
    adb = await connectDevice(webusb);
    nextStep();
};

document.getElementById("install").onclick = async () => {
    await install();
};

document.addEventListener("DOMContentLoaded", () => {
    if (!navigator.userAgent.includes("Chrome")) {
        createAlert("This tool is only supported on Google Chrome, or Chromium-based browsers. Please switch to Chrome to use this tool, or follow the <a href='https://help.rebble.io/apk-load-android/#3'>manual installation instructions</a>.");
        return;
    }

    if (!("serial" in navigator)) {
        createAlert("This tool requires the WebUSB & Web Serial APIs, which is not supported by your browser. Please switch to Chrome to use this tool, or follow the <a href='https://help.rebble.io/apk-load-android/#3'>manual installation instructions</a>.");
        return;
    }

    const buttons = document.querySelectorAll('button:not(.step.active button)');
    buttons.forEach(button => button.disabled = true);
    document.getElementById("android_installer").hidden = false;
});


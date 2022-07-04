class IosInfo {
    static deviceName() {
        return 'iPhone Simulator'; // pass the device name
    }

    static platFormVersion() {
        return '14.0'; // pass the platform version
    }

    static appName() {
        return 'com.awesomeapp'; // pass the bundleid or ipa name
    }
}

module.exports = IosInfo;
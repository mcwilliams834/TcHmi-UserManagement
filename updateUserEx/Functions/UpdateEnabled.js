// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

(function (TcHmi) {

    var UpdateEnabled = function (par1) {
        let user = TcHmi.Controls.get("TcHmiCombobox").getSelectedValue();
        let autoLogoutTime = TcHmi.Controls.get("AutoLogout").getText();
        let userName = TcHmi.Controls.get("UserName").getText();
        let domain = TcHmi.Controls.get("Domain").getText();
        let enabled = TcHmi.Controls.get("Enabled").getText();
        let pw = TcHmi.Controls.get("PasswordTextbox").getText();
        let groups = TcHmi.Controls.get("Groups").getText();
        let locale = TcHmi.Controls.get("Locale").getText();

        TcHmi.Server.UserManagement.updateUserEx(
            user,
            {
                domain: domain,
                enabled: enabled,
                newName: userName,
                autoLogout: autoLogoutTime
                
            },
            { timeout: 2000 },
            function (data) {
                if (data.error === TcHmi.Errors.NONE) {
                    // Success
                    console.log("success");
                } else {
                    // Error
                    console.log("error: " + data.error);
                }
            }
        );
    };
    
    TcHmi.Functions.registerFunction('UpdateEnabled', UpdateEnabled);
})(TcHmi);
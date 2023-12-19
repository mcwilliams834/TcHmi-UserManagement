// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.5/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var MyNamespace;
        (function (MyNamespace) {
            function UpdateUserWithPw(par1) {

                let user = TcHmi.Controls.get("TcHmiCombobox").getSelectedValue();
                let autoLogoutTime = TcHmi.Controls.get("AutoLogout").getText();
                let userName = TcHmi.Controls.get("UserName").getText();
                let domain = TcHmi.Controls.get("Domain").getText();
                let enabled = TcHmi.Controls.get("Enabled").getText();
                let pw = TcHmi.Controls.get("PasswordTextbox").getText();
                let currentPw = TcHmi.Controls.get("currentPassword").getText();
                let groups = TcHmi.Controls.get("Groups").getText();
                let locale = TcHmi.Controls.get("Locale").getText();
                console.log(pw);

                TcHmi.Server.UserManagement.updateUserEx(
                    user,
                    {
                        domain: domain,
                        enabled: TcHmi.ValueConverter.toBoolean(enabled),
                        newName: userName,
                        password: pw,
                        currentPassword: currentPw,
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

            }
            MyNamespace.UpdateUserWithPw = UpdateUserWithPw;
        })(MyNamespace = Functions.MyNamespace || (Functions.MyNamespace = {}));
        Functions.registerFunctionEx('UpdateUserWithPw', 'TcHmi.Functions.MyNamespace', MyNamespace.UpdateUserWithPw);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
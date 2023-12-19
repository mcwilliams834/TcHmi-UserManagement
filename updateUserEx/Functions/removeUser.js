// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.5/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var MyNamespace;
        (function (MyNamespace) {
            function removeUser(par1) {

                let user = TcHmi.Controls.get("TcHmiCombobox").getSelectedValue();

                TcHmi.Server.UserManagement.removeUserEx (
                    user, 
                    null,
                    {timeout: 2000},
                    function(data) {
                        if (data.error === TcHmi.Errors.NONE) {
                            // Success
                            console.log("Removed: " + user);
                        } else {
                            // Error
                            console.log("remove failed");
                        }
                    }
                );
            }
            MyNamespace.removeUser = removeUser;
        })(MyNamespace = Functions.MyNamespace || (Functions.MyNamespace = {}));
        Functions.registerFunctionEx('removeUser', 'TcHmi.Functions.MyNamespace', MyNamespace.removeUser);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
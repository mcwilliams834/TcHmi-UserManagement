// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.5/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var MyNamespace;
        (function (MyNamespace) {
            function GetUserData(par1) {

                let selectedUser = TcHmi.Controls.get("TcHmiCombobox").getSelectedValue()
                let users;
               
                let autoLogoutTime;
                let domain;
                let enabled;
                let groups = [];
                let locale;

                TcHmi.Server.UserManagement.listUsers(function (data) {
                    if (data.error === TcHmi.Errors.NONE) {
                        console.log(data.userDetails);
                        users = data.userDetails;
                        console.log(users);
                        console.log(selectedUser);

                        for (const prop in users) {
                            if (prop == selectedUser) {
                                autoLogoutTime = `${users[prop].autoLogout}`;
                                domain = `${users[prop].domain}`;
                                enabled = `${users[prop].enabled}`;
                                groups = `${users[prop].groups}`;
                                locale = `${users[prop].locale}`;

                                //console.log(`${users[prop].autoLogout}`);


                            }
                            
                        }
                        console.log("----------" + selectedUser + "-----------");
                    
                        console.log(autoLogoutTime + "\n" + domain + "\n" + enabled + "\n" + groups + "\n" + locale);
                        TcHmi.Controls.get("UserName").setText(selectedUser);
                        TcHmi.Controls.get("AutoLogout").setText(autoLogoutTime);
                        TcHmi.Controls.get("Domain").setText(domain);
                        TcHmi.Controls.get("Enabled").setText(enabled);
                        TcHmi.Controls.get("Groups").setText(groups);
                        TcHmi.Controls.get("Locale").setText(locale);

                    } else {
                        // Error
                    }
                });
              
                
            }
            MyNamespace.GetUserData = GetUserData;
        })(MyNamespace = Functions.MyNamespace || (Functions.MyNamespace = {}));
        Functions.registerFunctionEx('GetUserData', 'TcHmi.Functions.MyNamespace', MyNamespace.GetUserData);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
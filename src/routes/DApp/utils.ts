interface customWindow extends Window {
  zilPay?: any;
}
declare const window: customWindow;

const getCurrentAccount = () => {
  window.zilPay.wallet.connect().then(function (connected: any) {
    console.log(connected);
    console.log(window.zilPay.wallet.net);
    console.log(window.zilPay.wallet.defaultAccount); // subscribe to network changes
    window.zilPay.wallet.observableNetwork().subscribe(function (network: any) {
      console.log("Network has been changed to " + network);
    }); // subscribe to user account changes
    window.zilPay.wallet.observableAccount().subscribe(function (account: any) {
      console.log(
        "Account has been changed to " +
          account.base16 +
          " (" +
          account.bech32 +
          ")"
      );
      window.zilPay.blockchain
        .getBalance(account.bech32)
        .then(function (resp: any) {
          console.log(resp);
        });
    });
  });
};

const checkZilPresent = new Promise(function (resolve, reject) {
  if (window.zilPay) resolve(true);
  reject(false);
});

export { checkZilPresent, getCurrentAccount };

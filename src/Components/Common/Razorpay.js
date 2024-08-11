
const Razorpay = (amount) => {
  const RAZORPAY_KEY_ID = "rzp_test_q5pCm6YsxMpdnN";

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  return new Promise(async (resolve, reject) => {
    console.log(amount);
    if (amount !== undefined && amount >= 100) {
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        alert("Razorpay SDK failed to load. Are you online?");
        reject("Razorpay SDK failed to load.");
        return;
      }

      const options = {
        key: RAZORPAY_KEY_ID,
        amount: amount * 100,
        currency: "INR",
        name: "Your Company Name",
        description: "Test Transaction",
        image: "https://your-logo-url.com/logo.png",
        handler: function (response) {
          console.log(response.razorpay_payment_id);
          resolve(response.razorpay_payment_id); // Resolve the promise with the response
        },
        prefill: {
          name: "Suraj Kanbarkar",
          email: "youremail@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "IET Pune",
        },
        theme: {
          color: "#F37254",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", function (response) {
        alert(`Payment failed! Error: ${response.error.description}`);
        reject(response.error); // Reject the promise with the error
      });

      rzp.open();
    } else {
      alert("Amount should be more than 100 rs");
      reject("Amount should be more than 100 rs");
    }
  });
};


export default Razorpay;
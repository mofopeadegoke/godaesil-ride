// src/constants/content.js

import cashIcon from "../assets/cash_icon.png";
import messageIcon from "../assets/message_icon.png";
import packageIcon from "../assets/package_icon.png";
import sendIcon from "../assets/send_icon.png";
import customerServiceIcon from "../assets/customer_service_icon.png";
import trackDeliveryIcon from "../assets/trackDelivery_iphone.png";
import getEstimateImg from "../assets/get_estimate.png";
import inAppMessageImg from "../assets/inApp_message.png";
import trustedDeliveryImg from "../assets/trusted_delivery.png";

export const FEATURES = [
  {
    imgUrl: cashIcon,
    imgAltText: "Cash icon",
    title: "Get Estimate",
    text: "Get an estimate of the cost to make a delivery."
  },
  {
    imgUrl: packageIcon,
    imgAltText: "Package icon",
    title: "Deliver a Package",
    text: "Deliver your packages from anywhere."
  },
  {
    imgUrl: messageIcon,
    imgAltText: "Messages icon",
    title: "In-app Message",
    text: "Chat with your courier to be constantly updated."
  },
  {
    imgUrl: customerServiceIcon,
    imgAltText: "Customer service icon",
    title: "Customer Care",
    text: "Get in touch with the customer care service representative."
  },
  {
    imgUrl: sendIcon,
    imgAltText: "Send icon",
    title: "Real-time Track",
    text: "With Godaesil Ride, you can track your deliveries in real-time."
  }
];

export const SECTIONS = [
  {
    imgUrl: trackDeliveryIcon,
    imgAlt: "An Iphone with the Godeasil app showing on its screen",
    title: "Track Deliveries in Real-time",
    text: "Stay in control with our real-time delivery tracking. Know where your order is and when it will arrive, ensuring a seamless experience."
  },
  {
    imgUrl: trustedDeliveryImg,
    imgAlt: "An Iphone with the Godeasil app showing on the screen and the user about to give a courier a rating",
    title: "Trusted Delivery Services",
    text: "Trust our reliable delivery services for peace of mind. We prioritize safety and efficiency to ensure your packages are in good hands."
  },
  {
    imgUrl: inAppMessageImg,
    imgAlt: "An Iphone showing the Godeasil app with user using the in app messaging feature in the app",
    title: "In-App Message With Image Sharing",
    text: "Connect seamlessly with in-app messaging and share photos instantly. Enhance communication and provide visual context for a more efficient delivery experience."
  },
  {
    imgUrl: getEstimateImg,
    imgAlt: "An Iphone showing the Godeasil app on the screen with the user viewing details of a package",
    title: "Get Estimate",
    text: "Get a quick estimate. Plan your delivery cost with our easy-to-use estimate tool."
  }
];
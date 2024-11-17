import { Heart, MessageCircle, Briefcase, Award } from "lucide-react";

export const cardData = [
  {
    title: "Talk to our Expert Counsellors",
    description:
      "Our expert counsellors are ready to help you to complete your admission process.",
    link: "Schedule a Call",
    icon: MessageCircle,
    onClick: () => {
      /* Add callback function */
    },
  },
  {
    title: "Refer & Earn",
    description:
      "Refer Collegedekho to a friend and earn reward points that you redeem in your Paytm Wallet",
    link: "Refer a Friend",
    icon: Award,
    onClick: () => {
      /* Add callback function */
    },
  },
  {
    title: "Career Profile Test",
    description:
      "A scientific assessment method that can analyze your aptitude, capabilities, personality, and interests and suggest the best-fit career options for you.",
    link: "Predict Your Career",
    icon: Briefcase,
    onClick: () => {
      /* Add callback function */
    },
  },
  {
    title: "CollegeDekho Insurance",
    description:
      "Get yourself or your parents covered with an insurance and continue uninterrupted education.",
    link: "Learn More",
    icon: Heart,
    onClick: () => {
      /* Add callback function */
    },
  },
];

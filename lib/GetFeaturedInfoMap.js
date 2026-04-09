import {
  IconBathroom,
  IconKitchen,
  IconSeaView,
  IconFamilyRooms,
  IconBudgetFriendly,
  IconMountainView
} from "@/components/Icons";
export function getFeaturedInfoMap(t) {
  return {
    privateBathroom: {
      icon: IconBathroom,
      label: t("homepageOffer.bathroom")
    },
    privateKitchen: {
      icon: IconKitchen,
      label: t("homepageOffer.kitchen")
    },
    partialSeaView: {
      icon: IconSeaView,
      label: t("homepageOffer.partialSeaView")
    },
    familyFriendly: {
      icon: IconFamilyRooms,
      label: t("homepageOffer.familyFriendly")
    },
    budgetFriendly: {
      icon: IconBudgetFriendly,
      label: t("homepageOffer.budgetFriendly")
    },
    mountainView: {
      icon: IconMountainView,
      label: t("homepageOffer.mountainView")
    }
  };
}
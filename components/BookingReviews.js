import BookingDesktopReviews from "@/components/BookingDesktopReviews"
import BookingMobileReviews from "@/components/BookingMobileReviews"


export default function BookingReviews({categories }){

return(
    <>
     <>
      <BookingMobileReviews reviews={categories.reviews} />
      <BookingDesktopReviews reviews={categories.reviews} />
    </>
    
    </>
)


}
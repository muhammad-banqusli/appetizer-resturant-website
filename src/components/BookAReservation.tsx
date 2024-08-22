import ReservationForm from "./forms/ReservationForm"

const BookAReservation = () => {
  return (
    <section className="flex flex-col w-full py-12 px-6 sm:px-12">
        <div className="text-center relative mb-12">
                        <h2 className="mb-6 text-[50px] text-[#333333] font-Poppins font-black">
                            Make A Reservation
                        </h2>
                        <span className="font-Fajardose text-[100px] text-primary opacity-100 absolute -top-[68px] right-0 left-0 -z-10">
                            Book A Table
                        </span>
                    </div>
        <ReservationForm />
    </section>
  )
}
export default BookAReservation
const GoogleMap = () => {
    return (
        <section className="w-full h-full flex flex-col justify-center items-center py-12">
             <div className="text-center relative mb-12">
                <h2 className="mb-6 text-[50px] text-[#333333] font-Poppins font-black">
                    Find Us on the Map
                </h2>
                <span className="font-Fajardose text-[100px] text-primary opacity-100 absolute -top-[68px] right-0 left-0 -z-10">
                    Map
                </span>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1341.6186832445642!2d29.985335573854098!3d39.4189273889169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c9480d7f2c04e3%3A0x1260e8d579a8e505!2sK%C3%BCtahya%20Vase!5e0!3m2!1sen!2str!4v1724331062667!5m2!1sen!2str"
                
                style={{border:0}}
                className='h-full min-h-96 w-full'
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>
    );
};
export default GoogleMap;

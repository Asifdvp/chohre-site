"use client";
import PhoneIcon from "@/assets/icons/phone.svg";
import MailIcon from "@/assets/icons/mail.svg";
const GoogleMapComponent = () => {
  return (
    <div className="w-full h-full rounded-md overflow-hidden relative">
      <iframe
        src="https://www.google.com/maps?q=40.38327836982031,49.87860672902113&z=15&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Overlay div */}
      <div className="w-[80%] text-sm font-medium leading-5 absolute bottom-3 left-1/2 -translate-x-1/2 rounded-lg bg-[#FEFEFE] bg-opacity-90 py-3 px-4 shadow-md text-center text-black/60">
<div className="mb-2 flex gap-4 items-center">
    <div className="flex items-center gap-2"><PhoneIcon/> 070 708 61 61</div>
    <div  className="flex items-center gap-2"><MailIcon/> chohreestetic@gmail.com</div>
</div>
<div>İş saatları: 10:00–19:00, Bazar.–Şənbə</div>
      </div>
    </div>
  );
};

export default GoogleMapComponent;

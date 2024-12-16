import x from "../images/x.svg";
import linkedin from "../images/linkedin.svg";
import instagram from "../images/instagram.svg";
import facebook from "../images/facebook.svg";

function Footer() {
  return (
    <div className="bg-[#F5F5F5] text-black py-8 font-poppins text-lg">
      <div className="container mx-auto flex flex-col justify-center">
        <div className="grid grid-cols-3 gap-12 justify-items-center">
          <div>
            <h3 className="font-bold text-xl mb-2">Company</h3>
            <ul className="text-gray-400 space-y-2 mt-4">
              <li>Community Blog</li>
              <li>Support</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Contact</h3>
            <ul className="text-gray-400 space-y-2 mt-4">
              <li>Partnerships</li>
              <li>FAQ</li>
              <li>Get in Touch</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Social Media</h3>
            <div className="flex gap-4 mt-4">
              <img
                src={instagram}
                alt="Instagram"
                className="w-10 h-10 cursor-pointer"
              />
              <img
                src={facebook}
                alt="Facebook"
                className="w-10 h-10 cursor-pointer"
              />
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-10 h-10 cursor-pointer"
              />
              <img
                src={x}
                alt="X (Twitter)"
                className="w-10 h-10 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

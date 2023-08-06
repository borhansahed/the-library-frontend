import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <footer className="w-full h-56  bg-blue-700 py-10 ">
        <section>
          <div className=" flex justify-center gap-10 text-white">
            <p>About</p>
            <p>Blog</p>
            <p>Jobs</p>
            <p>Press</p>
            <p>Accessibility</p>
            <p>Partners</p>
          </div>

          <div className="flex text-white justify-center mt-8 text-2xl gap-10">
            <p>
              <FaTwitter />
            </p>
            <p>
              <FaLinkedin />
            </p>
            <p>
              <FaFacebook />
            </p>
            <p>
              <FaGithub />
            </p>
            <p>
              <FaInstagram />
            </p>
          </div>
          <p className="text-center text-white mt-8">
            © 2023 The Library, Inc. All rights reserved.
          </p>
        </section>
      </footer>
    </>
  );
}

import { Rethink_Sans } from "next/font/google";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* navbar */}
      <nav>
        <div className="mx-auto flex justify-between items-center py-5 bg-[#0A0A0A] px-4 md:px-34">
          <img className="rounded-full w-20 md:w-44" src="/gambar/ZL3.png" alt="Logo" />
    
          <div className="hidden md:flex space-x-6 font-semibold">
            <a className="text-white">Home</a>
            <a className="text-white">About</a>
            <a className="text-white">Service</a>
            <a className="text-white">Portfolio</a>
            <a className="text-white">Contact</a>
          </div>

          <div className="md:hidden text-white text-3xl cursor-pointer">☰</div>
        </div>
      </nav>
      {/* navbar end */}

      {/* hero */}
      <section>
        <div className="relative mx-auto flex flex-col md:flex-row h-auto md:h-screen text-white bg-black bg-cover bg-center bg-no-repeat px-4 md:px-0">
          <div className="relative flex flex-1 flex-col justify-center items-center md:items-start px-0 md:px-50 max-w-7xl w-full text-center mt-80 md:text-left">
            <div className="flex-1 mb-8 md:mr-70">
              <h1 className="text-3xl md:text-5xl font-bold mb-3">Welcome To Our Website</h1>
              <div className="flex flex-col md:flex-row items-center md:justify-start justify-center w-full mb-6">
                <h2 className="text-2xl md:text-4xl text-red-500 font-bold">ZeroLimit Team</h2>
                <span className="block h-1 md:h-8 w-12 md:w-1 bg-red-500 rounded mt-2 md:mt-0 md:ml-4"></span>
              </div>
              <p className="mb-6 text-gray-300 text-sm md:text-base">
                We can help you in the IT field, such as creating websites, social media content, and cyber security. We have more than 3 years of experience in this field.
              </p>
              <button className="text-red-500 border-2 border-red-500 px-8 md:px-12 py-3 md:py-4 rounded-lg hover:bg-red-500 hover:text-white transition">
                Contact Us
              </button>
            </div>
          </div>
          <img className="w-full md:w-auto h-100 rounded-lg shadow-lg mt-60" src="/gambar/cpy2.jpg" alt="Hero Image"/>
        </div>
      </section>
      {/* hero end */}

      {/* About me */}
      <section className="relative">
        <div className="mx-auto flex flex-col h-auto md:h-screen bg-black text-white relative px-4 md:px-0">
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 py">
            <div className="w-full md:w-3/6 flex justify-center">
              <img className="rounded-lg w-full md:w-100 md:mb-22" src="/gambar/Au.png" alt="Profile Image" />
            </div>

            <div className="w-full md:w-4/9 mt-14 md:mt-16">
              <h4 className="text-red-500 font-semibold mb-2 text-center md:text-left">ABOUT CREATOR</h4>
              <h1 className="text-2xl md:text-3xl font-bold leading-snug text-center md:text-left">
                My Real Life is Up to You?\ I am a
              </h1>
              <h1 className="text-2xl md:text-3xl font-bold leading-snug mb-4 text-red-500 text-center md:text-left">
                Nuryadi Eka Haibah Z H
              </h1>
              <p className="text-gray-200 mb-6 leading-relaxed text-sm md:text-base text-center md:text-left">
                I'm a web developer and content creator. I living in Calgary, Canada. I spend my days with my hands in many different areas of web
                development from back end programming to front end engineering.
              </p>

              <ul className="space-y-3 mb-10 text-sm md:text-base">
                <li className="flex items-center gap-2"><span className="block h-5 w-1 bg-red-500 rounded ml-1" />Different of web development</li>
                <li className="flex items-center gap-2"><span className="block h-5 w-1 bg-red-500 rounded ml-1" />Graphic designer living</li>
                <li className="flex items-center gap-2"><span className="block h-5 w-1 bg-red-500 rounded ml-1" />Gun Violence Prevention</li>
                <li className="flex items-center gap-2"><span className="block h-5 w-1 bg-red-500 rounded ml-1" />Suspend tempor incididunt</li>
              </ul>

              <div className="flex justify-center md:justify-start">
                <button className="bg-red-500 text-white border-2 border-red-500 px-8 md:px-12 py-3 md:py-4 rounded-lg hover:bg-transparent hover:text-red-500 transition">
                  Download Our CV
                </button>
              </div>
            </div>
          </div>


          <div className="mt-16 md:mt-28 border-2 border-red-500 p-6 md:p-8 rounded-lg max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6 md:gap-16">
            <div>
              <h4 className="font-semibold mb-3">CONTACT NOW</h4>
              <p className="mb-2 flex items-center gap-2">📧 example@example.com</p>
              <p className="flex items-center gap-2">📞 +012 345 678 910</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">ADDRESS</h4>
              <p className="flex items-start gap-2">🏡 123 West 10th Street, Suite 456 New York, NY 12345</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">SOCIAL MEDIA</h4>
              <p className="mb-3">Also find us social media below</p>
              <div className="flex items-center gap-3">
                <img className="w-8 h-8 rounded-full mx-1.5 object-cover" src="/gambar/facebook.png" alt="Facebook" />
                <img className="w-8 h-8 rounded-full mx-2 object-cover" src="/gambar/instagram.png" alt="Instagram" />
                <img className="w-8 h-8 rounded-full mx-2 object-cover" src="/gambar/github.png" alt="GitHub" />
                <img className="w-8 h-8 rounded-full mx-1 object-cover" src="/gambar/youtube.png" alt="YouTube" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About me end */}

      {/* Our Service start */}
      <section className="bg-black text-white py-16 md:py-60 px-4 md:px-6 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <img className="w-40 md:w-240 mb-10 md:mb-250" src="/gambar/AN.png" alt="Logo" />
        </div>
        <div className="container mx-auto text-center mb-12 md:mb-30 relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">OUR SERVICE</h1>
          <div className="flex justify-center">
            <span className="block w-12 md:w-18 h-1 bg-red-500 mx-auto"></span>
          </div>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
          <div className="bg-[#1A1B1B] p-6 md:p-8 rounded-lg text-center">
            <div className="w-16 md:w-20 h-16 md:h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <img className="w-10 md:w-12" src="/gambar/coding.png" alt="Web Dev" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-5">Web/App Development</h3>
            <p className="text-gray-200 leading-relaxed text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, soluta officia! Ratione amet iusto repellendus labore tempora, dicta repellat
            </p>
          </div>

          <div className="bg-[#1A1B1B] p-6 md:p-8 rounded-lg text-center">
            <div className="w-16 md:w-20 h-16 md:h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <img className="w-12" src="/gambar/fingerprint.png" alt="Cybersecurity" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-5">CyberSecurity Developer</h3>
            <p className="text-gray-200 leading-relaxed text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, soluta officia! Ratione amet iusto repellendus labore tempora, dicta repellat
            </p>
          </div>

          <div className="bg-[#1A1B1B] p-6 md:p-8 rounded-lg text-center">
            <div className="w-16 md:w-20 h-16 md:h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <img className="w-12 md:w-14" src="/gambar/content-.png" alt="Content Creator" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-5">Content Creator</h3>
            <p className="text-gray-200 leading-relaxed text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, soluta officia! Ratione amet iusto repellendus labore tempora, dicta repellat
            </p>
          </div>
        </div>
      </section>
      {/* Our Service end */}

      {/* story start */}
      <section className="bg-black text-white flex items-center justify-center py-20 px-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="md:ml-30">
            <h4 className="text-sm text-red-500 mb-6 uppercase tracking-wide">Our Story</h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Some History of My Life,<br />2008 - 2025</h2>
            <div className="w-12 md:w-14 h-1 bg-red-500 mb-6"></div>
            <p className="text-gray-300 mb-6 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incidid labore et dolore magna aliqua.
            </p>

            <div className="flex items-center gap-4">
              <img className="w-14 h-14 rounded-full object-cover" src="/gambar/Au.png" alt="Profile" />
              <div>
                <h5 className="font-bold text-red-500">Date Of Birth</h5>
                <p className="text-gray-300">9, October 2008</p>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-3 mt-10 md:ml-30 mb-8">
              <p><span className="text-red-500 font-bold mr-3">2015</span>First time creating a website project.</p>
              <p><span className="text-red-500 font-bold mr-3">2000</span>Enter a company that focuses on IT.</p>
              <p><span className="text-red-500 font-bold mr-3">2010</span>Starting our own company with a ZeroLimit team.</p>
              <p><span className="text-red-500 font-bold mr-3">2015</span>Getting a big project from a large company in Canada.</p>
              <p><span className="text-red-500 font-bold mr-3">2019</span>Developing AI on our own company with ZeroLimit team.</p>
            </div>

            <button className="bg-red-500 text-white border-2 border-red-500 px-8 md:px-12 py-3 md:py-4 rounded-lg hover:bg-transparent hover:text-red-500 transition md:ml-30">
              More About Me
            </button>
          </div>
        </div>
      </section>
      {/* story end */}

      {/* footer start */}
      <section className="bg-black text-white py-10 md:py-20 px-4 md:px-6">
        <div className="border-2 border-red-500 p-6 md:p-10 rounded-lg max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-xl md:text-3xl font-semibold">Newsletter</h2>
          <div className="flex w-full md:w-auto">
            <input type="email" placeholder="Enter your email"
              className="px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none text-white w-full mr-15 md:w-96"
            />
            <button className="bg-red-500 text-white border-2 border-red-500 px-6 md:px-10 py-2 rounded-r-md hover:bg-transparent hover:text-red-500 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      {/* footer end */}
    </div>
  )
}

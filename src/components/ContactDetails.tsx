import { Outlet } from "react-router-dom";

const ContactDetails = () => {
  return (
    <>
      <div className="flex items-center w-[90%] mx-auto my-10 tracking-wider border text-appbgfooter">
        <div className="basis-1/4 shrink-0 bg-appdarkgreen text-white p-8 space-y-4">
          <h1 className="text-center font-bold text-2xl w-max mx-auto mb-8">Contact Details</h1>
          <hr />
          <div className="flex items-center gap-4">
            <svg width="50" height="40" viewBox="0 0 73 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M63.875 26.2921C63.875 44.1461 36.5 59.4494 36.5 59.4494C36.5 59.4494 9.125 44.1461 9.125 26.2921C9.125 20.2041 12.0091 14.3654 17.143 10.0604C22.2768 5.75554 29.2397 3.33706 36.5 3.33706C43.7603 3.33706 50.7232 5.75554 55.857 10.0604C60.9909 14.3654 63.875 20.2041 63.875 26.2921Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M36.5 33.9438C41.5396 33.9438 45.625 30.518 45.625 26.2921C45.625 22.0662 41.5396 18.6404 36.5 18.6404C31.4604 18.6404 27.375 22.0662 27.375 26.2921C27.375 30.518 31.4604 33.9438 36.5 33.9438Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div>
              <p>HeadOffice Address</p>
              <p>New York, USA</p>
            </div>
          </div>
          <hr />
          <div className="flex items-center gap-4">
            <svg width="50" height="40" viewBox="0 0 73 69" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M57.7915 3.35593L69.9582 14.7723L57.7915 26.1887"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M45.625 14.7723H69.9583"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M66.9164 48.7931V57.3553C66.9198 58.1502 66.7463 58.937 66.4069 59.6653C66.0675 60.3936 65.5698 61.0473 64.9456 61.5847C64.3214 62.1221 63.5844 62.5312 62.782 62.7858C61.9795 63.0405 61.1292 63.1351 60.2855 63.0635C50.9258 62.1092 41.9352 59.1082 34.0359 54.3015C26.6868 49.9195 20.4559 44.0729 15.7859 37.1769C10.6455 29.7312 7.44643 21.2539 6.44803 12.4319C6.37202 11.6427 6.47198 10.8472 6.74155 10.0962C7.01112 9.3452 7.44439 8.65508 8.01377 8.0698C8.58316 7.48451 9.27618 7.01689 10.0487 6.69669C10.8213 6.3765 11.6564 6.21076 12.5009 6.21001H21.6259C23.1021 6.19638 24.5331 6.68687 25.6524 7.59006C26.7716 8.49324 27.5027 9.7475 27.7093 11.119C28.0944 13.8592 28.8087 16.5496 29.8384 19.139C30.2477 20.1606 30.3363 21.2708 30.0937 22.3381C29.8511 23.4055 29.2875 24.3852 28.4697 25.1612L24.6068 28.7859C28.9368 35.9312 35.2418 41.8475 42.8568 45.9104L46.7197 42.2857C47.5467 41.5184 48.5908 40.9895 49.7283 40.7619C50.8657 40.5343 52.0489 40.6174 53.1376 41.0014C55.8972 41.9676 58.7645 42.6379 61.6847 42.9992C63.1622 43.1948 64.5116 43.8932 65.4762 44.9614C66.4408 46.0297 66.9534 47.3933 66.9164 48.7931Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div>
              <p>For Rental Support</p>
              <p>+1234567889</p>
              <p>+1098765432</p>
            </div>
          </div>
          <hr />
          <div className="flex items-center gap-4">
            <svg width="50" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M32.0002 58.7043C46.7278 58.7043 58.6668 46.8496 58.6668 32.226C58.6668 17.6024 46.7278 5.74765 32.0002 5.74765C17.2726 5.74765 5.3335 17.6024 5.3335 32.226C5.3335 46.8496 17.2726 58.7043 32.0002 58.7043Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.3335 32.226H58.6668"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M32.0002 5.74765C38.6702 12.9984 42.4608 22.4079 42.6668 32.226C42.4608 42.0441 38.6702 51.4536 32.0002 58.7043C25.3301 51.4536 21.5395 42.0441 21.3335 32.226C21.5395 22.4079 25.3301 12.9984 32.0002 5.74765V5.74765Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div>
              <p>The Office Hours</p>
              <p>Mon - Sat 9:00 - 18:00</p>
            </div>
          </div>
          <hr />
          <div className="flex items-center gap-4">
            <svg width="50" height="40" viewBox="0 0 63 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.5 10.9028H52.5C55.3875 10.9028 57.75 13.2022 57.75 16.0125V46.6709C57.75 49.4812 55.3875 51.7806 52.5 51.7806H10.5C7.6125 51.7806 5.25 49.4812 5.25 46.6709V16.0125C5.25 13.2022 7.6125 10.9028 10.5 10.9028Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M57.75 16.0125L31.5 33.8966L5.25 16.0125"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div>
              <p>Send Us Email</p>
              <p>example@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="basis-3/4 shrink flex flex-col px-8">
          <Outlet />
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <iframe
          className="mb-10 w-[100%]"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21411.95590314399!2d-73.94866288587092!3d40.67323054346999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1682060383543!5m2!1sen!2sbd"
          width="600"
          height="250"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default ContactDetails;

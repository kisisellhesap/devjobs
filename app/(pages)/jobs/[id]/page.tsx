import Button from "@/app/components/button";
import Image from "next/image";

const Id = () => {
  return (
    <div className="flex flex-col">
      <header className="h-[140px] flex gap-10 bg-Neutral-0 dark:bg-Slate-900 max-w-[730px] mx-auto w-full">
        <div className=" relative w-[140px] h-[140px] bg-[#E99210]">
          <Image
            src={"/assets/logos/scoot.svg"}
            fill
            className="object-contain p-8"
            alt=""
          />
        </div>

        <div className="flex justify-between items-center  flex-1 pr-10">
          <div className="flex flex-col gap-1.5">
            <h4 className="text-preset-2 text-Slate-900 dark:text-Neutral-0">
              Scoot
            </h4>
            <span className="text-preset-4-regular text-Slate-500">
              scoot.com
            </span>
          </div>
          <Button text="Company Site" buttonStyle={2} />
        </div>
      </header>

      <div className="flex flex-col gap-10 p-11 max-w-[730px] mx-auto w-full bg-Neutral-0 dark:bg-Slate-900 mt-11 ">
        <header className="flex items-center justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-Slate-500 dark:text-Slate-300 text-preset-4-regular">
              20h ago <span>Part Time</span>
            </p>

            <h3 className="text-Slate-900 dark:text-Neutral-0 hover:text-Slate-500 text-preset-1 ">
              Haskell and PureScript Dev
            </h3>

            <span className="text-Indigo-500 text-preset-5">
              United Kingdom
            </span>
          </div>

          <Button text="Apply Now" buttonStyle={1} />
        </header>

        <div className="flex flex-col gap-11">
          <p className="text-Slate-500  dark:text-Slate-300 text-preset-4-regular">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
            sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti. Sed egestas, ante et vulputate volutpat, eros pede semper
            est, vitae luctus metus libero eu augue. Morbi purus libero,
            faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
            Praesent elementum hendrerit tortor. Sed semper lorem at felis.
            Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
            dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
            dapibus eu, fermentum et, dapibus sed, urna.
          </p>

          <div className="flex flex-col gap-6">
            <h3 className="text-preset-3 text-Slate-900 dark:text-Neutral-0">
              Requirements
            </h3>
            <p className="text-Slate-500 dark:text-Slate-300 text-preset-4-regular">
              Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
              magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
              facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis,
              adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse
              ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante,
              mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede,
              ornare a, lacinia eu, vulputate vel, nisl.
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <div className="w-1 h-1 rounded-full bg-Indigo-500"></div>
                <p className="text-Slate-500 dark:text-Slate-300 text-preset-4-regular pl-5">
                  Morbi interdum mollis sapien. Sed
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-1 h-1 rounded-full bg-Indigo-500"></div>
                <p className="text-Slate-500 dark:text-Slate-300 text-preset-4-regular pl-5">
                  Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
                  pulvinar risus
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-1 h-1 rounded-full bg-Indigo-500"></div>
                <p className="text-Slate-500  dark:text-Slate-300 text-preset-4-regular pl-5">
                  Mauris nibh felis, adipiscing varius, adipiscing in, lacinia
                  vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut
                  lectus.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-1 h-1 rounded-full bg-Indigo-500"></div>
                <p className="text-Slate-500 dark:text-Slate-300 text-preset-4-regular pl-5">
                  Morbi interdum mollis sapien. Sed
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-preset-3 text-Slate-900 dark:text-Neutral-0">
              What You Will Do
            </h3>
            <p className="text-Slate-500 dark:text-Slate-300 text-preset-4-regular">
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. Morbi purus libero, faucibus
              adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
              elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
              volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
              pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
              fermentum et, dapibus sed, urna.
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <span className="text-Indigo-500 text-preset-4">1</span>
                <p className="text-Slate-500 dark:text-Slate-300 text-preset-4-regular pl-5">
                  Morbi interdum mollis sapien. Sed
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-Indigo-500 text-preset-4">2</span>

                <p className="text-Slate-500 dark:text-Slate-300 text-preset-4-regular pl-5">
                  Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
                  pulvinar risus
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-Indigo-500 text-preset-4">3</span>

                <p className="text-Slate-500  dark:text-Slate-300 text-preset-4-regular pl-5">
                  Mauris nibh felis, adipiscing varius, adipiscing in, lacinia
                  vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut
                  lectus.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-Indigo-500 text-preset-4">4</span>

                <p className="text-Slate-500 dark:text-Slate-300 text-preset-4-regular pl-5">
                  Morbi interdum mollis sapien. Sed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-Neutral-0 dark:bg-Slate-900 h-24 flex items-center  mt-20 ">
        <div className=" max-w-[730px] mx-auto w-full flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-preset-3 text-Slate-900 dark:text-Neutral-0">
              Senior Software Engineer
            </h3>
            <span className="text-preset-4-regular text-Slate-500">
              So Digital Inc.
            </span>
          </div>
          <Button text="Apply Now" buttonStyle={1} />
        </div>
      </div>
    </div>
  );
};

export default Id;

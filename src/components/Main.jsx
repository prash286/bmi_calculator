import { BsGenderAmbiguous, BsMoonStars } from "react-icons/bs";
import { CiDumbbell } from "react-icons/ci";
import { PiBowlFoodLight, PiCakeBold } from "react-icons/pi";
import { GiBiceps } from "react-icons/gi";
import { MdPregnantWoman } from "react-icons/md";
import { IoBodyOutline } from "react-icons/io5";
import BmiCalculator from "./BmiCalculator";
import HealthGuideCard from "./HealthGuideCard";
import BasicInfoCard from "./BasicInfoCard";

export default function Main() {
  return (
    <main className="grid grid-rows-[0.5fr_1fr_1fr]  lg:grid-rows-[0.9fr_1fr_1fr]">
      <header className="mb-[10vw] lg:mb-0 h-[100vh] pb-[8vh] lg:pr-[30vw] relative">
        <div className="h-[100%] bg-gradient-to-l from-[#5899e26e] to-[#ffffff] rounded-br-3xl pt-[8vh] pl-[8vw] lg:after:content-[''] lg:after:w-[80px] lg:after:h-[80px] lg:after:absolute lg:after:rounded-br-full lg:after:border-r-2 lg: after:border-[lightgray] lg:after:border-b-2 lg:after:bottom-[10px] lg:after:right-[200px]">
          <div className="flex justify-center  lg:justify-normal">
            <img src="logo.png" alt="logo" className="mix-blend-darken" />
          </div>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] lg:mt-14 relative gap-6 pr-[4vw] lg:pr-0">
            <div className="pt-8 sm:flex lg:block sm:flex-col">
              <div className="text-4xl sm:text-5xl lg:text-4xl font-bold flex flex-col mb-8 items-center lg:items-baseline">
                <span>Body Mass</span>
                <span>Index Calculator</span>
              </div>
              <p>
                Better understand your weight in relation to your height using
                our body mass index(BM) calculator. While the BMI is not the
                sole determinant of healthy weight, it offers a valuable
                starting point to evaluate your overall health & well-being.
              </p>
            </div>
            <BmiCalculator />
          </div>
        </div>
      </header>
      <section className="p-[6vh_8vw] pl-[4vw]  lg:pt-0">
        <aside className="md:grid grid-cols-[0.9fr_1fr] gap-8 mb-8 ">
          <div className="flex justify-center p-5 pl-[3rem] sm:pl-0 relative mt-8">
            <span className="block w-[400px] h-[calc(100%_-_140px)] absolute bg-[#3bcbcb30] bottom-0 -z-[1] rounded-[50px]" />
            <img src="health.png" alt="bmi" className="w-[350px]" />
          </div>
          <div className="flex flex-col justify-center p-5 pt-[12vh] pr-[4vw]">
            <span className="mb-5 text-[1.8rem] font-bold leading-9">
              What your BMI result means
            </span>
            <p className="text-sm">
              A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
              Maintaining a healthy weight may lower your chances of
              experiencing healthy issues later on, such as obesity and type 2
              diabetes. Aim for nutritious diet with reduced fat and suger
              content, incorporating ample fruits and vegetables. Additionally,
              strive for regular physical activity, ideal about 30 minutes daily
              for 5 days a week.
            </p>
          </div>
        </aside>
        <aside className="grid lg:grid-cols-[repeat(3,1fr)] gap-8 pl-[4vw] mt-20">
          <HealthGuideCard
            title="Healthy eating"
            description="Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood."
          >
            <span className="block w-fit [clip-path:circle()] bg-[#fddced] p-2.5 ">
              <PiBowlFoodLight className="text-2xl text-[#c53e7b]" />
            </span>
          </HealthGuideCard>
          <HealthGuideCard
            title="Regular excercise"
            description="Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."
          >
            <span className="block w-fit [clip-path:circle()] bg-[#f9ede0] p-2.5 ">
              <CiDumbbell className="text-2xl text-[#eba96a]" />
            </span>
          </HealthGuideCard>
          <HealthGuideCard
            title="Adequate sleep"
            description="Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
          >
            <span className="block w-fit [clip-path:circle()] bg-[#d4f6f6] p-2.5 ">
              <BsMoonStars className="text-2xl text-[#46b1ab]" />
            </span>
          </HealthGuideCard>
        </aside>
      </section>
      <footer className="p-[6vh_8vw] flex flex-col items-center md:block relative">
        <div className="grid md:grid-cols-2 place-items-center">
          <div className="flex flex-col gap-4">
            <span className="text-3xl font-bold block text-center md:text-left leading-[4rem] md:leading-3">
              Limitations of BMI
            </span>
            <p className="text-sm">
              Although BMI is often a particular indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </p>
          </div>
          <BasicInfoCard
            icon={<BsGenderAmbiguous className="text-[#f67652] text-2xl" />}
            title="Gender"
            info="A development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI."
          />
        </div>
        <div className="md:flex justify-end md:pr-24 ">
          <div className="lg:before:content-[''] lg:before:w-[70px] lg:before:h-[80px] lg:before:border-l-2 lg:before:border-b-2 lg:before:border-[lightgray] lg:before:absolute lg:before:left-[calc(100%_-_60rem)] lg:before:top-[30%] lg:before:rounded-bl-[150px]">
            <BasicInfoCard
              icon={<PiCakeBold className="text-[#51aca3] text-2xl" />}
              title="Age"
              info="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
            />
          </div>
          <BasicInfoCard
            icon={<GiBiceps className="text-[#8854c1] text-2xl" />}
            title="Muscle"
            info="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
          />
        </div>
        <div className="md:flex justify-center">
          <BasicInfoCard
            icon={<MdPregnantWoman className="text-[#d9b93a] text-2xl" />}
            title="Pregnancy"
            info="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
          />
          <BasicInfoCard
            icon={<IoBodyOutline className="text-[#f67652] text-2xl" />}
            title="Race"
            info="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
          />
        </div>
      </footer>
    </main>
  );
}

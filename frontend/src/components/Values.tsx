import ValueCard, {Value} from "./ValueCard"
import Values1Image from '../assets/Values1.jpg';
import Values2Image from '../assets/Values2.jpg';
import Values3Image from '../assets/Values32.jpg';


const valuesData: Value[] = [
    {
      image: Values1Image,
      heading: 'Transparency',
      description: 'No hidden ingredients, no opacity. Full disclosure of ingredients used & their concentration',
    },
    {
      image: Values2Image,
      heading: 'Efficacy',
      description: 'Each product is launched on back of proven science only',
    },
    {
      image: Values3Image,
      heading: 'Affordable',
      description: 'Skincare, accessible to all',
    },
  ];

function Values() {
  return (
    <div className="pt-[100px] pb-[70px] px-[100px] bg-white text-black ">
        <h1 className="font-bold text-[40px] text-center p-[40px]">Our Values</h1>
        <div className="flex flex-wrap justify-between p-4 ">
        {valuesData.map((value, index) => (
          <ValueCard
            key={index}
            image={value.image}
            heading={value.heading}
            description={value.description}
          />
        ))}
        </div>
    </div>
  )
}

export default Values
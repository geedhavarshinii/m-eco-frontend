import React from "react";
import DonateItComp from "./DonateItComp";

const DonateIt = () => {
  const donations = [
    {
      label: 'The Nature Conservancy',
      details: 'Supports conservation efforts to protect natural habitats and biodiversity across the globe, ensuring a sustainable future for our planet.',
    },
    {
      label: 'World Wildlife Fund (WWF)',
      details: 'Focuses on wildlife conservation and endangered species protection, working to preserve critical ecosystems and promote sustainable practices.',
    },
    {
      label: 'Greenpeace',
      details: 'An independent organization campaigning for environmental justice, addressing issues like climate change, deforestation, and pollution through advocacy and direct action.',
    },
    {
      label: 'Earthjustice',
      details: 'Provides legal representation to protect people’s health, to preserve magnificent places and wildlife, to advance clean energy, and to combat climate change.',
    },
    {
      label: 'Sierra Club',
      details: 'Promotes the responsible use of the earth’s ecosystems and resources and educates and enlists humanity to protect and restore the quality of the natural and human environment.',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <main className="py-8">
        <section className="text-center">
          <h1 className="text-pinkone text-6xl font-bold mb-2 font-robotocon">
            DONATE{" "}
            <span className="text-greenone text-6xl font-bold font-robotocon">
              IT
            </span>{" "}
          </h1>
          <div className="flex flex-col items-center mt-24 font-krub space-y-8">
            {donations.map((donation, index) => (
              <DonateItComp key={index} donation={donation} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default DonateIt;





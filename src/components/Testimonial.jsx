import React from "react";
import Image from "../functions/Image";
import { users } from "../data/users";
import TestimonialCard from "./ui_components/TestimonialCard";

const Testimonial = ({ theme }) => {
  return (
    <section id="testimonials">
      <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
        <div className="relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12">
          <Image name="quotes" type="quotes" />
          {users &&
            users.map((user, i) => (
              <TestimonialCard
                key={i}
                id={i}
                name={user.name}
                position={user.position}
                text={user.text}
                image={user.image}
                theme={theme}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

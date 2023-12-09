import { FeaturesData } from "@/app/page";
import FeatureCard from "@/components/molecule/feature-card";
import LinkButton from "@/components/molecule/link-button";
import SectionHead from "@/components/molecule/section-head";

const OurServices = () => {
    return (
        <section className="bg-[url('/images/backgrounds/SquareBackground.svg')] bg-center bg-cover">
        <div className="container section flex flex-col large-gap">
          <SectionHead
            highlighter="Our Services"
            H2={<>Understanding Your Business</>}
            paragraphs={[
              <>
                We&apos;ll listen to <span>your goals</span> and complete a free
                audit to discover if we&apos;re a great fit to work with each
                other.
              </>,
            ]}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between items-start large-gap">
            {FeaturesData.slice(0, 6).map((item: any) => {
              const { id, image, title, description, list, link } = item;
              return (
                <FeatureCard
                  key={id}
                  image={image}
                  title={title}
                  description={description}
                  list={list}
                  link={link}
                />
              );
            })}
          </div>
          <LinkButton />
        </div>
      </section>
    )
}

export default OurServices
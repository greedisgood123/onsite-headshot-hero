import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Gallery = () => {
  // Actual portfolio images
  const galleryImages = [
    "https://ainan.studio/img/0FK_1526.jpg?w=400&h=400&fit=crop&crop=face",
    "https://ainan.studio/img/20191208-LAN_0281.jpg?w=400&h=400&fit=crop&crop=face",
    "https://ainan.studio/img/AIN00523.jpg?w=400&h=400&fit=crop&crop=face",
    "https://ainan.studio/img/AIN00718.jpg?w=400&h=400&fit=crop&crop=face",
    "https://ainan.studio/img/Amin%20Rashidi%20Studio-664.jpg?w=400&h=400&fit=crop&crop=face",
    "https://ainan.studio/img/DSC_3411.jpg?w=400&h=400&fit=crop&crop=face",
    "https://ainan.studio/img/FKP03731.jpg?w=400&h=400&fit=crop&crop=face",
    "https://ainan.studio/img/FKP03833.jpg?w=400&h=400&fit=crop&crop=face",
    "https://ainan.studio/img/FKP03935.jpg?w=400&h=400&fit=crop&crop=face",
    "https://drive.google.com/uc?export=view&id=1aBSTXquiT9oH-gx_zchHfZYtJNQX7P_S",
    "https://drive.google.com/uc?export=view&id=1fAAx3-CBmeuJHe29POHVOZQbt2b44BIf",
    "https://drive.google.com/uc?export=view&id=1wJnRG_COd16WhAtxOZ7reZjCAwdFcirG",
    "https://drive.google.com/uc?export=view&id=1DKNgTwS3da7xr528YcZTUjESZJSAAqNn",
    "https://drive.google.com/uc?export=view&id=1zZJFCjjRG_hKQ3dtLhqDg73NdIYv--V-",
    "https://drive.google.com/uc?export=view&id=1ta-7ClUSFA19RjrUkKjFXJ3EYqfYJdN8",
    "https://drive.google.com/uc?export=view&id=1kGsm92uGnQAcnAmqbEXrEKihSYw99IzL",
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional headshots that make lasting impressions
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300">
                  <img
                    src={image}
                    alt={`Professional headshot example ${index + 1}`}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};
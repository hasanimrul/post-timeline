import PostContent from "@/components/PostContent/PostContent";




const Index = () => {

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     let historyT1 = gsap.timeline({
  //       stagger: 0.1,
  //       ease: "power2.in",
  //       scrollTrigger: {
  //         trigger: "#history-section",
  //         // markers: true,
  //         start: "top 60%",
  //         end: "bottom top",
  //         // toggleActions: "restart none none none",
  //       },
  //     });
  //     historyT1
  //     .from("#history-section h2", fadeInUp)
  //     .from(".l1", fadeInUp)

  //   });

  //   return () => ctx.revert(); // <- cleanup!
  // }, []);

  return (
    <main className="main-container">
      <PostContent />
    </main>
  );
};

export default Index;

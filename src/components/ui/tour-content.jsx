import { cn } from "@/lib/utils";

function ContentComponent(props) {
  const content = props.steps[props.currentStep].content;
  return (
    <>
      <div
        className={cn(
          "absolute -left-3 2xl:-left-7",
          "bg-yellow-400 rounded-full px-2.5 2xl:px-3.5 2xl:py-1 text-lg 2xl:text-3xl font-semibold font-g8 w-fit"
        )}
      >
        {props.currentStep + 1}{" "}
      </div>
      <h2 className="font-bold text-base 2xl:text-[32px] font-g8 text-white">
        {props.currentStep == 0
          ? "First Step"
          : props.currentStep == 1
          ? "Second Step"
          : "Third Step"}
      </h2>

      <div
        className={cn(
          "font-g8 text-base 2xl:text-[28px] 2xl:leading-8 2xl:mt-4 text-white font-semibold",
          {
            "": props.currentStep == 0,
          }
        )}
      >
        {/* Check if the step.content is a function or a string */}
        {typeof content === "function"
          ? content({ ...props, someOtherStuff: "Custom Text" })
          : content}
      </div>
    </>
  );
}

export default ContentComponent;

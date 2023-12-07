import { cn } from "@/lib/utils";

function ContentComponent(props) {
  const content = props.steps[props.currentStep].content;
  return (
    <>
      <div
        className={cn(
          "absolute -left-7",
          "bg-yellow-400 rounded-full px-3.5 py-1 text-3xl font-semibold font-g8 w-fit"
        )}
      >
        {props.currentStep + 1}{" "}
      </div>
      <h2 className="font-bold text-[32px] font-g8 text-white">
        {props.currentStep == 0
          ? "First Step"
          : props.currentStep == 1
          ? "Second Step"
          : "Third Step"}
      </h2>

      <div
        className={cn("font-g8 text-[28px] text-white font-semibold", {
          "": props.currentStep == 0,
        })}
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

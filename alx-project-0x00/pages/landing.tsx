import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Button Component Variations
        </h1>

        {/* Small Buttons */}
        <div className="flex gap-3">
          <Button title="Small - Rounded SM" styles="text-sm rounded-sm px-3 py-1" />
          <Button title="Small - Rounded MD" styles="text-sm rounded-md px-3 py-1" />
          <Button title="Small - Rounded Full" styles="text-sm rounded-lg px-3 py-1" />
          <Button title="Small - Rounded Full" styles="text-sm rounded-full px-3 py-1" />
        </div>

        {/* Medium Buttons */}
        <div className="flex gap-3">
          <Button title="Medium - Rounded SM" styles="text-base rounded-sm px-4 py-2" />
          <Button title="Medium - Rounded MD" styles="text-base rounded-md px-4 py-2" />
          <Button title="Medium - Rounded Full" styles="text-base rounded-lg px-4 py-2" />
          <Button title="Medium - Rounded Full" styles="text-base rounded-full px-4 py-2" />
        </div>

        {/* Large Buttons */}
        <div className="flex gap-3">
          <Button title="Large - Rounded SM" styles="text-lg rounded-sm px-6 py-3" />
          <Button title="Large - Rounded MD" styles="text-lg rounded-md px-6 py-3" />
          <Button title="Large - Rounded Full" styles="text-lg rounded-lg px-6 py-3" />
          <Button title="Large - Rounded Full" styles="text-lg rounded-full px-6 py-3" />
      </div>
    </div>
    </div>
  )
}
export default Landing
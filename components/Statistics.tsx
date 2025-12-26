
const statsItems = [
    {
        label: "WPM:",
        data: "40"
    },
    {
        label: "Accuracy:",
        data: "94%"
    },
    {
        label: "Time:",
        data: "0:60"
    },
]
const Statistics = () => {
  return (
    <div className="grid grid-cols-3 md:flex md:self-start md:justify-start w-full divide-x divide-neutral-700">
        {statsItems.map((item, index) => (
            <p key={index} className="text-neutral-400 md:text-xl flex flex-col md:flex-row items-center md:px-4 md:first:pl-0 gap-2">
                {item.label} 

                <span className="font-bold text-2xl text-neutral-0">{item.data}</span>
            </p>
        ))}
    </div>
  )
}

export default Statistics
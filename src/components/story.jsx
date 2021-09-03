const Story = () => {
  const stories = [
    {
      name: "kitty__",
      url: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
      name: "steff88",
      url: "https://images.unsplash.com/photo-1492362764835-5733512e3ddc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=332&q=80",
    },
    {
      name: "girl6_",
      url: "https://images.unsplash.com/photo-1608161317085-de67a4e3189b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
      name: "samo0",
      url: "https://images.unsplash.com/photo-1546728151-7124a03bd1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=8037-4d1c97mat&fit=crop&w=281&q=80",
    },
    {
      name: "perff89_",
      url: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
      name: "rechard",
      url: "https://images.unsplash.com/photo-1614767354054-157d58f3c670?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
  ];

  return (
    <div className="font-sora py-10">
      <h1 className="text-5xl text-black font-extrabold text-center">
        Bkit Story
      </h1>

      <ul className="flex justify-center space-x-6 py-10">
        {stories.map((ss) => {
          return (
            <li className="flex flex-col items-center space-y-1">
              <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
                <a
                  className="block bg-white p-1 rounded-full"
                  href="https://github.com/MerseniBilel"
                >
                  <img
                    className="h-16 w-16 rounded-full"
                    src={ss.url}
                    alt={ss.name}
                  />
                </a>
              </div>
              <a href="https://github.com/MerseniBilel">{ss.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Story;

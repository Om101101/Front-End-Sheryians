let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  fetch(`https://randomuser.me/api/?nat=IN
`)
    .then((raw) => raw.json())
    .then((result) => {
      //    console.log(result.results[0])
      const { name, email, gender, picture } = result.results[0];
      document.querySelector("#parent").innerHTML +=
        `<div class="card w-72 p-5 rounded-2xl bg-zinc-800/70
             backdrop-blur-md border border-white/10
             hover:scale-[1.03] hover:shadow-xl hover:shadow-black/40
             transition-all duration-300">

                <div class="w-32 h-32 bg-zinc-700 rounded-2xl mb-4
               overflow-hidden mx-auto border-4 border-green-500/70">

                    <img src="${picture.large}" class="w-full h-full object-cover">
                </div>

                <h3 class="font-semibold text-2xl text-center">
                    ${name.first}
                </h3>

                <h5 class="text-sm font-semibold opacity-80 text-center capitalize">
                    ${gender}
                </h5>

                <h6 class="text-sm font-semibold opacity-60 text-center break-all">
                    ${email}
                </h6>

                <p class="mt-4 text-xs font-semibold opacity-80 leading-relaxed text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Eum possimus, quos facilis voluptate recusandae
                    consectetur voluptates, quibusdam tempora, voluptatem perferendis
                </p>

            </div>`;
    });
});

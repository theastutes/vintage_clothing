import React from "react";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import Link from "next/link";

const page = async () => {
  const session = await auth();
  if (!session?.user) redirect("/");
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
    <div className="text-2xl h-screen flex items-center justify-center">
      Cart
=======
<<<<<<< HEAD
>>>>>>> 4850929 (ned)
    <div className="grid grid-rows-3 sm:grid-cols-3 gap-2 text-2xl h-screen overflow-y-scroll overflow-hidden p-2 sm:pb-2 pb-48">
      <div className="overflow-y-scroll overflow-hidden p-2 text-xs w-full row-span-3 sm:col-span-2 rounded-md bg-white/10">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
        cupiditate quod aspernatur reprehenderit sint eveniet non quae error
        iusto eligendi. Voluptate earum soluta quam accusamus sunt, iure odio
        non sed porro explicabo impedit, tenetur expedita veniam eum consequatur
        rem laudantium eaque ipsum exercitationem assumenda temporibus. Dolorem
        vel tempore laborum perferendis cupiditate, sed, soluta impedit,
        voluptates mollitia libero repellat ipsum enim temporibus omnis saepe.
        Corrupti impedit voluptas possimus totam voluptatibus consequatur nobis
        aliquam blanditiis dolores repudiandae, laudantium est reiciendis sequi
        sed perspiciatis porro temporibus ex nam in nisi dolorem. Excepturi
        maiores facilis consequuntur tempora commodi dolorem amet quod
        distinctio ea, numquam vero quisquam minus corporis illum asperiores
        debitis sequi. Maxime libero quia doloremque pariatur, accusantium ipsa
        veritatis ea id consequatur. Exercitationem tempore eius, hic eveniet
        accusamus facere optio laboriosam, magni explicabo nulla, numquam
        repudiandae a atque ipsum necessitatibus dolores vitae soluta similique
        ea commodi. Provident obcaecati dicta itaque et, atque reiciendis
        laudantium aliquid id non. Tempore quo dignissimos earum iusto, odit,
        neque, pariatur optio ipsum illum repellendus eveniet eius voluptate
        quam deleniti sed reiciendis nisi illo laborum porro aut distinctio
        beatae eaque officia. Nostrum ab ad quasi omnis qui iure quam corporis
        natus corrupti pariatur. Similique velit natus eveniet placeat voluptas
        blanditiis alias consequuntur possimus veniam tempore explicabo dolores
        quis totam ea repudiandae dolor tempora hic vitae, porro laborum in iste
        quos deleniti! Dolor maxime, exercitationem fugiat consequuntur optio,
        odit, aliquam magni odio fugit delectus totam nesciunt. Illo dolor
        incidunt tenetur soluta ipsa ullam molestias unde! Quo itaque laudantium
        inventore earum beatae. Illum facilis laborum eos magni porro quaerat,
        velit vero voluptatibus quasi unde accusamus impedit dolorem delectus
        iste! Vero eos iusto non nostrum ab delectus ipsam nulla eaque, tempora
        minima! Voluptate eaque quisquam consequuntur, nobis esse rerum et, quo
        odio in harum officia. Inventore atque esse accusantium, nostrum saepe
        officiis illum animi magnam vitae omnis voluptatibus voluptate iusto
        deleniti itaque minima. Odit corporis natus totam vitae quo! Tempora
        impedit cum quos minima facere esse, omnis fugit laboriosam, similique
        neque perspiciatis eaque accusantium commodi culpa quod. Placeat saepe
        et excepturi repellendus modi unde nobis neque quibusdam quaerat
        deserunt ab nisi laudantium alias earum libero optio amet, quidem
        mollitia molestiae numquam odio praesentium odit molestias? Enim quia
        cumque corporis iusto est quisquam? Similique vel sit odio nulla saepe
        quis dolorum id in inventore a voluptates praesentium nihil officia
        laudantium fugit doloribus unde veniam, ad rerum cum animi aperiam?
        Culpa maxime illum nobis molestias fugit excepturi, incidunt possimus
        facere sed neque deserunt, tenetur perferendis quidem aspernatur
        reprehenderit minima, ratione voluptates quaerat expedita quas impedit
        unde illo ipsa. Labore, similique ducimus sit necessitatibus itaque
        magnam autem, quae rem veritatis, quis distinctio! Reiciendis corrupti
        numquam nisi asperiores quibusdam eum necessitatibus tenetur, officia
        accusantium explicabo ab architecto ut harum praesentium quidem officiis
        molestiae quae odit nostrum perspiciatis sapiente modi magnam quod!
        Consectetur nisi vitae, porro, eaque voluptatibus impedit maxime
        exercitationem nemo praesentium ad nesciunt excepturi quia molestiae
        reprehenderit nihil autem incidunt fugit provident! Voluptate officia
        neque, possimus ipsa reprehenderit ut consequatur ratione recusandae,
        quam labore sapiente!
      </div>
      <div className=" flex flex-col justify-around items-center w-full p-2 h-full min-h-32 text-lg sm:text-lg sm:row-span-1 sm:col-span-1 bg-white/10 rounded-md">
        <div className="w-full flex justify-between items-center">
          {" "}
          <span className="text-sky-500">Subtotal :</span> <span>500Rs</span>
        </div>
        <Link
          className="flex items-center justify-center bg-sky-500 w-full text-white px-4 py-2 rounded-md text-xs"
          href={""}
        >
          Checkout
        </Link>
      </div>
<<<<<<< HEAD
=======
=======
    <div className="text-xl  overflow-hidden h-screen grid grid-rows-2 sm:grid-cols-2 items-start ">
      <div className="   h-screen text-orange-200 bg-white/20 overflow-y-scroll scroll overflow-hidden p-2">
        <div className="w-full bg-yellow-200/20 h-28">
        </div>
      </div>
      <div className="   bg-white/25 p-2 text-purple-200">
        
      </div>

>>>>>>> f4ec3c5 (added authentication v1)
>>>>>>> a02a66d (ned)
>>>>>>> 4850929 (ned)
    </div>
  );
};

export default page;

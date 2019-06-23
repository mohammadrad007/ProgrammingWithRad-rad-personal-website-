const Data = {
  posts: [
    {
      id: 1,
      postTitle: "جاوا اسکریپت چیست و چه کاربردی دارد؟",
      postDate: "28 مرداد 1398",
      postImageUrl:
        "https://files.virgool.io/upload/users/12142/posts/wu1uagkywc0x/zmn4svyvvy8n.jpeg",
      postContent:
        "ایا تا بحال برایتان سوال شده که جاوا اسکریپت چیست و چگونه کار میکند؟؟ ما به این سوال پاسخ می دهیم",
      postTags: "جاوا اسکرییپت",
      like: 8
    },
    {
      id: 2,
      postTitle: "کمی در مورد php نسخه 7",
      postDate: "29 مرداد 1398 ",
      postImageUrl:
        "data:image/png;base64,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",
      postContent:
        "طبق برنامه زمانبدی انتشار PHP 7 که به اتفاق آرا تصویب شد ، قرار است در اکتبر ۲۰۱۵ این نسخه انتشار یابد .حتی اگر کمی انتشار آن به تاخیر بیافتد می توانیم مطمئن باشیم که تا پایان امسال شاهد رونمایی آن خواهیم بود ویژگی های نهایی این نسخه مشخص شده است و لیست مشخصات آن هم به صورت رسمی تا پایان ماه مارس نهایی خواهد شد",
      postTags: "تست",
      like: 5
    },
    {
      id: 3,
      postTitle: "پیش به سوی node js",
      postDate: "1 مرداد 1398",
      postImageUrl: "https://s.7learn.com/uploads/2018/04/1-1.jpg",
      postContent:
        "شاید توجه کرده باشید که این اواخر بیشتر درباره Node.js و Express.js یا Socket.io پست منتشر می کنم ( فکر کنم عاشق اینجور تکنولوژی های جدید شدم 😛  ) و به منتشر کردن پست هایی با موضوعات سنتی مثل HTML، CSS، WordPress یا PHP کم لطفی می کنم. دلیل اینکه بیشتر درباره تکنولوژی نسبتا جدیدی مثل Node صحبت می کنم بسیار واضح است! می خواهم دانش و مهرات هایی که در طول یک سال آشنایی با Node.js در وب سایت ها و بلاگ های دیگر کسب کرده ام را با شما تقسیم کنم. البته این دلیل نمی شود که تنها درباره Node پست منتشر کنم. امیدوارم به زودی طیف گسترده ای از موضوعات را تحت پوشش قرار دهم یا دهیم. 🙂",
      postTags: "نود نود_جی _اس",
      like: 14
    },
    {
      id: 4,
      postTitle: "پایتون (Python) چیست؟",
      postDate: "۴ اردیبهشت 1398",
      postImageUrl:
        "data:image/png;base64,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",
      postContent:
        "پایتون یک زبان برنامه نویسی قدرتمند سطح بالا، شئ گرا و حرفه‌ای می‌باشد که در حال گسترش روز‌افزون در جهان است. این عبارت پاسخ کامل سوال”  پایتون (Python) چیست؟ ” را برای شما بازگو می کند.این زبان با قابلیت‌های فراوان و شگفت انگیزی که دارد تحولی در دنیای برنامه نویسی از توسعه برنامه‌های تحت وب تا ایجاد بازی‌های رایانه‌ای، بوجود آورده است. پایتون ابتدا در سال 1991 وارد دنیای برنامه نویسی شد و در سال‌های اخیر توجه برنامه نویسان را به خود جلب کرده و روز به روز بر طرفداران آن افزوده می‌شود.پایتون هنوز در ایران جایگاه خود را پیدا نکرده است اما آینده روشنی برای آن می‌توان تصورکرد زیرا این زبان کاربردهای فراوانی دارد و در بسیاری از سایت‌های بین‌المللی نیز مورد استفاده قرار گرفته استتعداد کلمات کلیدی پایتون کم، ساده و کاملا قابل درک است و این موضوع فهم و یادگیری آن را برای کاربران تازه‌کار بسیار ساده کرده است. در واقع این زبان پیچیدگی‌های معمول سایر زبان‌ها را ندارد و پس از برنامه نویسی، منطق آن کاملا قابل درک است. این زبان اپن سورس را می‌توان در زمان کوتاهی به خوبی یاد گرفت و بواسطه کتابخانه‌های گسترده‌ای که دارد از آن استفاده‌های فراوان کرد.",
      postTags: "پایتون پای",
      like: 9
    },
    {
      id: 5,
      postTitle: "ری اکت",
      postDate: "6 اردیبهشت 1398",
      postImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXiGf8AL-10P9l7YHJff1vA81_EK3zrVtt8X7hiYFDFtiUoyPnjQ",
      postContent:
        "ری اکت کتابخانه‌ای است که به توسعه‌دهندگان کمک می‌کند تا واسطهای کاربری (UI) را به شکل درختی از اجزای کوچک با نام کامپوننت‌ها ایجاد کنند. یک کامپوننت ترکیبی از اچ‌تی‌ام‌ال و جاوااسکریپت است و تمام منطق مورد نیاز برای نمایش قسمت کوچکی از یک واسط کاربری بزرگ‌تر را در خود دارد. هر کدام از این کامپوننت‌ها می‌توانند به بخش‌های پیچیده‌تر یک اپ اضافه شوند. بقیه‌اش هم جزئیات است.در این مطلب به رابطه‌ی ری اکت با جاوااسکریپت و اچ‌تی‌ام‌ال نگاهی می‌اندازیم. برای کسانی که با کدنویسی سر و کار دارند این مقاله کمک می‌کند تا آمادگی لازم برای برخی از مفاهیم پیچیده‌تر را پیدا کنند.",
      postTags: "تست",
      like: 6
    },
    {
      id: 6,
      postTitle: "ریداکس برادر ناتنی ری اکت :))",
      postDate: "8 اردیبهشت 1398",
      postImageUrl: "https://via.placeholder.com/800x300",
      postContent:
        "Labore ad nisi esse ipsum. Ipsum pariatur velit ex aliqua nostrud cupidatat deserunt pariatur velit sit consequat quis duis elit. Laboris cillum nostrud incididunt elit sunt fugiat nulla non consequat. Sint esse deserunt ullamco est nulla dolor aliquip id ad et. Qui minim culpa esse ex minim sint sunt cillum reprehenderit qui laboris est. Voluptate ipsum amet do tempor ea enim in ea et.",
      postTags: "تست",
      like: 11
    }
    // {
    //   id: 7,
    //   postTitle: "جدیدترین خبر",
    //   postDate: "۴ آبان ۱۳۹۷",
    //   postImageUrl: "https://via.placeholder.com/800x300",
    //   postContent:
    //     "Labore ad nisi esse ipsum. Ipsum pariatur velit ex aliqua nostrud cupidatat deserunt pariatur velit sit consequat quis duis elit. Laboris cillum nostrud incididunt elit sunt fugiat nulla non consequat. Sint esse deserunt ullamco est nulla dolor aliquip id ad et. Qui minim culpa esse ex minim sint sunt cillum reprehenderit qui laboris est. Voluptate ipsum amet do tempor ea enim in ea et.",
    //   postTags: "تست",
    //   like: 20
    // },
    // {
    //   id: 8,
    //   postTitle: "جدیدترین خبر",
    //   postDate: "۴ آبان ۱۳۹۷",
    //   postImageUrl: "https://via.placeholder.com/800x300",
    //   postContent:
    //     "Labore ad nisi esse ipsum. Ipsum pariatur velit ex aliqua nostrud cupidatat deserunt pariatur velit sit consequat quis duis elit. Laboris cillum nostrud incididunt elit sunt fugiat nulla non consequat. Sint esse deserunt ullamco est nulla dolor aliquip id ad et. Qui minim culpa esse ex minim sint sunt cillum reprehenderit qui laboris est. Voluptate ipsum amet do tempor ea enim in ea et.",
    //   postTags: "تست",
    //   like: 20
    // },
    // {
    //   id: 9,
    //   postTitle: "جدیدترین خبر",
    //   postDate: "۴ آبان ۱۳۹۷",
    //   postImageUrl: "https://via.placeholder.com/800x300",
    //   postContent:
    //     "Labore ad nisi esse ipsum. Ipsum pariatur velit ex aliqua nostrud cupidatat deserunt pariatur velit sit consequat quis duis elit. Laboris cillum nostrud incididunt elit sunt fugiat nulla non consequat. Sint esse deserunt ullamco est nulla dolor aliquip id ad et. Qui minim culpa esse ex minim sint sunt cillum reprehenderit qui laboris est. Voluptate ipsum amet do tempor ea enim in ea et.",
    //   postTags: "تست",
    //   like: 20
    // },
    // {
    //   id: 10,
    //   postTitle: "جدیدترین خبر",
    //   postDate: "۴ آبان ۱۳۹۷",
    //   postImageUrl: "https://via.placeholder.com/800x300",
    //   postContent:
    //     "Labore ad nisi esse ipsum. Ipsum pariatur velit ex aliqua nostrud cupidatat deserunt pariatur velit sit consequat quis duis elit. Laboris cillum nostrud incididunt elit sunt fugiat nulla non consequat. Sint esse deserunt ullamco est nulla dolor aliquip id ad et. Qui minim culpa esse ex minim sint sunt cillum reprehenderit qui laboris est. Voluptate ipsum amet do tempor ea enim in ea et.",
    //   postTags: "تست",
    //   like: 20
    // },
    // {
    //   id: 11,
    //   postTitle: "جدیدترین خبر",
    //   postDate: "۴ آبان ۱۳۹۷",
    //   postImageUrl: "https://via.placeholder.com/800x300",
    //   postContent:
    //     "Labore ad nisi esse ipsum. Ipsum pariatur velit ex aliqua nostrud cupidatat deserunt pariatur velit sit consequat quis duis elit. Laboris cillum nostrud incididunt elit sunt fugiat nulla non consequat. Sint esse deserunt ullamco est nulla dolor aliquip id ad et. Qui minim culpa esse ex minim sint sunt cillum reprehenderit qui laboris est. Voluptate ipsum amet do tempor ea enim in ea et.",
    //   postTags: "تست",
    //   like: 20
    // },
    // {
    //   id: 12,
    //   postTitle: "جدیدترین خبر",
    //   postDate: "۴ آبان ۱۳۹۷",
    //   postImageUrl: "https://via.placeholder.com/800x300",
    //   postContent:
    //     "Labore ad nisi esse ipsum. Ipsum pariatur velit ex aliqua nostrud cupidatat deserunt pariatur velit sit consequat quis duis elit. Laboris cillum nostrud incididunt elit sunt fugiat nulla non consequat. Sint esse deserunt ullamco est nulla dolor aliquip id ad et. Qui minim culpa esse ex minim sint sunt cillum reprehenderit qui laboris est. Voluptate ipsum amet do tempor ea enim in ea et.",
    //   postTags: "تست",
    //   like: 20
    // },
    // {
    //   id: 13,
    //   postTitle: "جدیدترین خبر",
    //   postDate: "۴ آبان ۱۳۹۷",
    //   postImageUrl: "https://via.placeholder.com/800x300",
    //   postContent:
    //     "Labore ad nisi esse ipsum. Ipsum pariatur velit ex aliqua nostrud cupidatat deserunt pariatur velit sit consequat quis duis elit. Laboris cillum nostrud incididunt elit sunt fugiat nulla non consequat. Sint esse deserunt ullamco est nulla dolor aliquip id ad et. Qui minim culpa esse ex minim sint sunt cillum reprehenderit qui laboris est. Voluptate ipsum amet do tempor ea enim in ea et.",
    //   postTags: "تست",
    //   like: 20
    // },
    // {
    //   id: 14,
    //   postTitle: "جدیدترین خبر",
    //   postDate: "۴ آبان ۱۳۹۷",
    //   postImageUrl: "https://via.placeholder.com/800x300",
    //   postContent:
    //     "Labore ad nisi esse ipsum. Ipsum pariatur velit ex aliqua nostrud cupidatat deserunt pariatur velit sit consequat quis duis elit. Laboris cillum nostrud incididunt elit sunt fugiat nulla non consequat. Sint esse deserunt ullamco est nulla dolor aliquip id ad et. Qui minim culpa esse ex minim sint sunt cillum reprehenderit qui laboris est. Voluptate ipsum amet do tempor ea enim in ea et.",
    //   postTags: "تست",
    //   like: 20
    // },
    // {
    //   id: 15,
    //   postTitle: "جدیدترین خبر",
    //   postDate: "۴ آبان ۱۳۹۷",
    //   postImageUrl: "https://via.placeholder.com/800x300",
    //   postContent:
    //     "Labore ad nisi esse ipsum. Ipsum pariatur velit ex aliqua nostrud cupidatat deserunt pariatur velit sit consequat quis duis elit. Laboris cillum nostrud incididunt elit sunt fugiat nulla non consequat. Sint esse deserunt ullamco est nulla dolor aliquip id ad et. Qui minim culpa esse ex minim sint sunt cillum reprehenderit qui laboris est. Voluptate ipsum amet do tempor ea enim in ea et.",
    //   postTags: "تست",
    //   like: 20
    // },
    // {
    //   id: 16,
    //   postTitle: "جدیدترین خبر",
    //   postDate: "۴ آبان ۱۳۹۷",
    //   postImageUrl: "https://via.placeholder.com/800x300",
    //   postContent:
    //     "Labore ad nisi esse ipsum. Ipsum pariatur velit ex aliqua nostrud cupidatat deserunt pariatur velit sit consequat quis duis elit. Laboris cillum nostrud incididunt elit sunt fugiat nulla non consequat. Sint esse deserunt ullamco est nulla dolor aliquip id ad et. Qui minim culpa esse ex minim sint sunt cillum reprehenderit qui laboris est. Voluptate ipsum amet do tempor ea enim in ea et.",
    //   postTags: "تست",
    //   like: 20
    // },
    // {
    //   id: 17,
    //   postTitle: "جدیدترین خبر",
    //   postDate: "۴ آبان ۱۳۹۷",
    //   postImageUrl: "https://via.placeholder.com/800x300",
    //   postContent:
    //     "Labore ad nisi esse ipsum. Ipsum pariatur velit ex aliqua nostrud cupidatat deserunt pariatur velit sit consequat quis duis elit. Laboris cillum nostrud incididunt elit sunt fugiat nulla non consequat. Sint esse deserunt ullamco est nulla dolor aliquip id ad et. Qui minim culpa esse ex minim sint sunt cillum reprehenderit qui laboris est. Voluptate ipsum amet do tempor ea enim in ea et.",
    //   postTags: "تست",
    //   like: 20
    // },
    // {
    //   id: 18,
    //   postTitle: "جدیدترین خبر",
    //   postDate: "۴ آبان ۱۳۹۷",
    //   postImageUrl: "https://via.placeholder.com/800x300",
    //   postContent:
    //     "Labore ad nisi esse ipsum. Ipsum pariatur velit ex aliqua nostrud cupidatat deserunt pariatur velit sit consequat quis duis elit. Laboris cillum nostrud incididunt elit sunt fugiat nulla non consequat. Sint esse deserunt ullamco est nulla dolor aliquip id ad et. Qui minim culpa esse ex minim sint sunt cillum reprehenderit qui laboris est. Voluptate ipsum amet do tempor ea enim in ea et.",
    //   postTags: "تست",
    //   like: 20
    // }
  ],
  courses: [
    {
      id: 1,
      title: "دوره NodeJs",
      imageUrl:
        "https://toplearn.com/img/course/img-course-%D8%B4%D9%86%D8%A8%D9%87-%DB%B2-%D8%AA%DB%8C%D8%B1-%DB%B1%DB%B3%DB%B9%DB%B7-76784990-823.jpg",
      text: "متن تست",
      time: "10:11:00",
      price: 50000
    },
    {
      id: 2,
      title: "دوره Linux",
      imageUrl:
        "https://toplearn.com/img/course/img-course-%D8%B4%D9%86%D8%A8%D9%87-%DB%B9-%D8%AF%DB%8C-%DB%B1%DB%B3%DB%B9%DB%B6-86429735-684.jpg",
      text: "متن تست",
      time: "10:11:00",
      price: 100000
    },
    {
      id: 3,
      title: "دوره ReactJs",
      imageUrl:
        "https://toplearn.com/img/course/img-course-%D9%BE%D9%86%D8%AC-%D8%B4%D9%86%D8%A8%D9%87-%DB%B4-%D9%85%D8%B1%D8%AF%D8%A7%D8%AF-%DB%B1%DB%B3%DB%B9%DB%B7-67580934-1036.jpg",
      text: "متن تست",
      time: "10:11:00",
      price: 80000
    },
    {
      id: 4,
      title: "دوره ReactNative",
      imageUrl:
        "https://toplearn.com/img/course/img-course-%D8%B4%D9%86%D8%A8%D9%87-%DB%B2-%D8%AA%DB%8C%D8%B1-%DB%B1%DB%B3%DB%B9%DB%B7-76784990-823.jpg",
      text: "متن تست",
      time: "10:11:00",
      price: 80000
    }
  ]
};

const getPosts = () => {
  return { ...Data };
};

export default getPosts;

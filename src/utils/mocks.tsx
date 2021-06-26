import IPicture from "../shared/models/IPicture";
import IPost from "../shared/models/IPost";
import ISection from "../shared/models/ISection";

export const mockSections: ISection[] = [
  {
    body: [
      {
        content:
          "Suspendisse potenti. Donec eget purus sollicitudin, molestie urna sed, dictum eros. Praesent ac nisl eget urna imperdiet fringilla. Nullam rutrum viverra lorem et rhoncus. Sed in ex volutpat, semper nisl et, varius risus.",
        isList: false,
      },
      {
        content:
          "Sed sollicitudin et enim in suscipit. Aliquam fermentum risus eu purus bibendum lobortis. In ac orci nulla. Suspendisse potenti arc ni. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        isList: false,
      },
      {
        content:
          "Aliquam fermentum risus eu purus bibendum lobortis. In ac orci nulla. Aenean nec elit eget diam porttitor eleifend non ut nisl. Suspendisse potenti. Donec eget purus sollicitudin, molestie urna sed, dictum eros. Praesent ac nisl eget urna imperdiet fringilla. Nullam rutrum viverra lorem et rhoncus. Sed in ex volutpat, semper nisl et, varius risus.",
        isList: false,
      },
    ],
  },
  {
    title: "Booga Ooga",
    picture: {
      pic: "https://image.shutterstock.com/image-vector/vector-illustration-cloudy-sky-anime-600w-1086086774.jpg",
      creator: "Kevin Saephanh",
      creatorLink: "https://www.google.com",
      website: "Kevco",
      websiteLink: "https://www.youtube.com",
    } as IPicture,
    body: [
      {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at mollis ligula, vitae mattis leo. Curabitur congue cursus libero quis congue. Donec non purus id odio mattis ornare. Pellentesque gravida sollicitudin leo eu laoreet. Duis et lobortis magna, vel tincidunt magna. Vestibulum lacinia felis in dui condimentum, ut ultricies orci porta. Integer condimentum lectus et tortor efficitur, quis posuere sapien imperdiet. Donec mollis tortor in commodo laoreet. Duis feugiat aliquam vestibulum. Aliquam sollicitudin tortor lorem, sed sodales lacus aliquam non. Donec sit amet libero libero. Quisque eu convallis erat, in scelerisque leo. Donec facilisis, arcu a molestie tincidunt, orci metus pretium mauris, nec ultrices nisl arcu eu dolor. Morbi scelerisque est in lacus eleifend ornare.",
        isList: false,
      },
      {
        content: "Morbi scelerisque est in lacus eleifend ornare:",
        isList: false,
      },
      {
        content: [
          "Lorem ipsum sit amet",
          "dolor elit amet",
          "Morbi scelerisque est in lacus",
        ],
        isList: true,
      },
      {
        content:
          "Nunc cursus dapibus nulla sed ultricies. Sed sollicitudin et enim in suscipit. Quisque pulvinar pulvinar augue, vel viverra massa semper eu. Praesent eget nulla eget neque vehicula varius. Aliquam fermentum risus eu purus bibendum lobortis. In ac orci nulla. Aenean nec elit eget diam porttitor eleifend non ut nisl. Suspendisse potenti. Donec eget purus sollicitudin, molestie urna sed, dictum eros. Praesent ac nisl eget urna imperdiet fringilla. Nullam rutrum viverra lorem et rhoncus. Sed in ex volutpat, semper nisl et, varius risus. Cras gravida dictum tortor a dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        isList: false,
      },
    ],
  },
  {
    title: "Ooga Booga Mooga",
    picture: {
      pic: "https://image.shutterstock.com/image-illustration/aesthetic-anime-theme-illustration-boy-600w-1762336295.jpg",
      creator: "Kevin Saephanh",
      creatorLink: "https://www.google.com",
      website: "Kevco",
      websiteLink: "https://www.youtube.com",
    } as IPicture,
    body: [
      {
        content:
          "Vestibulum lacinia felis in dui condimentum, ut ultricies orci porta. Integer condimentum lectus et tortor efficitur, quis posuere sapien imperdiet. Donec mollis tortor in commodo laoreet. Duis feugiat aliquam vestibulum. Aliquam sollicitudin tortor lorem, sed sodales lacus aliquam non. Donec sit amet libero libero. Quisque eu convallis erat, in scelerisque leo. Donec facilisis, arcu a molestie tincidunt, orci metus pretium mauris, nec ultrices nisl arcu eu dolor. Morbi scelerisque est in lacus eleifend ornare.",
        isList: false,
      },
      {
        content:
          "Aliquam sollicitudin tortor lorem, sed sodales lacus aliquam non. Donec sit amet libero libero. Quisque eu convallis erat, in scelerisque leo. Donec facilisis, arcu a molestie tincidunt, orci metus pretium mauris, nec ultrices nisl arcu eu dolor. Morbi scelerisque est in lacus eleifend ornare.",
        isList: false,
      },
    ],
  },
];

export const mockPost: IPost = {
  title: "First Post Wahoo",
  desc: "This is a description for this post. Random writing and stuff to fill space. I hope it fills enough space because I like space filled. Space is bad.",
  categories: ["Category", "Apples", "Stuffs"],
  user: "Kevino Saepino",
  userProfilePic:
    "https://media-exp3.licdn.com/dms/image/C4E03AQFd7JbQAq-YCQ/profile-displayphoto-shrink_100_100/0/1601661885765?e=1629936000&v=beta&t=Rz90OOaoNbDTJiC-J78OkqgiACu_jtp2FS9OTlMYvL4",
  dateCreated: new Date(),
  thumbnail: {
    pic: "https://image.shutterstock.com/image-illustration/night-sky-clouds-anime-background-600w-1582517818.jpg",
    creator: "Kevin Saephanh",
    creatorLink: "https://www.google.com",
    website: "Kevco",
    websiteLink: "https://www.youtube.com",
  } as IPicture,
  sections: mockSections,
};

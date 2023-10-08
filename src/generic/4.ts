/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Props {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<Props> {
  pageInfo(): void {
    console.log(this.props.title);
  }
}

const page = new Page({ title: "book1" });

page.pageInfo();

export {};

const Ensure = (target: Object, propertyKey: string) => {
  console.log(target, propertyKey);
}

class Car {
  @Ensure
  public model: string

  constructor(model) { this.model = model }
}
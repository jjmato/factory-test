// Logica de negocio el tipo solo puede ser female o male
interface UseCase {
  value: 'female' | 'male';
}

interface Factory {
  make(x: string): UseCase;
}

class FactoryImpl implements Factory {
  make(gender: string): UseCase {
    switch (gender) {
      case 'female':
        return new FemaleUseCase();
      case 'male':
        return new MaleUseCase();
      default:
        throw 'Unexpected gender ' + gender 
    }
  }
}

class FemaleUseCase implements UseCase {
  value: 'female' | 'male' = 'female';
}

class MaleUseCase implements UseCase {
  value: 'female' | 'male' = 'male';
}


class Main {


  genderBL = new GenderBaseClass();

  main() {
    // TODO: create context and app
    this.genderBL.setGender('male');
    this.genderBL.doSomething()
  }

  // simulate user input
  setGender(gender: string) {
    this.genderBL.setGender(gender);
    this.genderBL.doSomething();
  }

}

class GenderBaseClass {
  factory: Factory = new FactoryImpl();
  useCase: UseCase = new FemaleUseCase()

  doSomething() {
    // esto es logica de presentacion??? 
    console.log( '🔊', this.useCase.value);
  }

  setGender(gender: string) {
    this.useCase = this.factory.make(gender);
  }
}


const app = new Main();
app.main();
app.setGender('female');
app.setGender('male');
app.setGender('patriarcado perez');
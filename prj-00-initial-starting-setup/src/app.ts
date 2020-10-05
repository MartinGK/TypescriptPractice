class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLElement;

    constructor(){
        this.templateElement = <HTMLTemplateElement>document.getElementById('preject-input');
        this.hostElement = <HTMLDivElement>document.getElementById('preject-input');

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = <HTMLElement>importedNode.firstElementChild;
        this.attach();
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

const project = new ProjectInput();
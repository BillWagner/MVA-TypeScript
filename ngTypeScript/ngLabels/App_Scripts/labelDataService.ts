/// <reference path="label.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />

module LabelApplication {
    import Rest = LabelApplication.Rest;
    import ngr = ng.resource;

    // create an interface for the resource type because I like to use 
    // create instead of save for new objects:
    interface ILabelResourceClass extends ngr.IResourceClass<Rest.Label> {
        create(label: Rest.Label, success: Function);
    }
    
    LabelEditor.editorModule.factory('labelDataService', ["$resource",
        (r) => {
            return new LabelDataService(r);
        }]);

    export class LabelDataService {
        private resource: ILabelResourceClass;
        private currentData: Array<Rest.Label>;
        private onUpdate: (labels: Array<Rest.Label>) => void;


        constructor($resource: ngr.IResourceService) {
            this.resource = <ILabelResourceClass><any> $resource(
                "api/Labels/:id",
                { id: "@id" },
                {
                    get: { method: "GET" },
                    save: { method: "PUT" },
                    create: { method: "POST" },
                    query: { method: "GET", isArray: true },
                    delete: { method: "DELETE" }
                });
            this.retrieveAllLabels();
        }

        public setUpdateHandler(evHandler: (labels: Array<Rest.Label>) => void) {
            this.onUpdate = evHandler;
        }
        
        private retrieveAllLabels() {
            this.resource.query().$promise.then((result) => {
                this.currentData = result;
                this.onUpdate(this.currentData);
            });
        }

        public updateLabel(label: Rest.Label) {
            this.resource.save({ id: label.Id }, label,
                () => this.retrieveAllLabels();
        }

        public createLabel(message: string, color: string) {
            this.resource.create({
                Id: 0,
                Color: color,
                Text: message
            }, () => this.retrieveAllLabels());
        }
        
        public deleteLabel(id: number) {
            this.resource.delete({
                Id: id
            }, () => this.retrieveAllLabels());
        }

    }
}

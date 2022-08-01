import { AWSTemplateFormatVersion } from "../types/AWSTemplateFormatVersion";
import { CloudFormationBase } from "../types/CloudFormationBase";

class Builder {
    _cloudformation = {
        Parameters: {},
        Resources: {}
    } as CloudFormationBase;

    setTemplateFormatVersion = (version: AWSTemplateFormatVersion) => {
        this._cloudformation["AWSTemplateFormatVersion"] = version;
    }

    addResource = (name: string, resource: Record<string, any>) => {
        this._cloudformation.Resources![name] = resource;
    }

    addParameter = (name: string, resource: Record<string, any>) => {
        this._cloudformation.Resources![name] = resource;
    }

    build = () => this._cloudformation as CloudFormationBase
}

export { Builder };
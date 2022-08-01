import { AWSTemplateFormatVersion } from "../types/AWSTemplateFormatVersion";
import { CloudFormationBase } from "../types/CloudFormationBase";

class Builder {
    _cloudformation = {
        Parameters: {},
        Resources: {},
        Outputs: {}
    } as CloudFormationBase;

    setTemplateFormatVersion = (version: AWSTemplateFormatVersion) => {
        this._cloudformation["AWSTemplateFormatVersion"] = version;
    }

    addResource = (name: string, resource: Record<string, any>) => {
        this._cloudformation.Resources![name] = resource;
    }

    addParameter = (name: string, parameter: Record<string, any>) => {
        this._cloudformation.Resources![name] = parameter;
    }

    addOutput = (name: string, output: Record<string, any>) => {
        this._cloudformation.Outputs![name] = output;
    }

    build = () => this._cloudformation as CloudFormationBase
}

export { Builder };
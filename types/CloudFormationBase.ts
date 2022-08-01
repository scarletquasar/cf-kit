import { AWSTemplateFormatVersion } from "./AWSTemplateFormatVersion"

type CloudFormationBase = {
    AWSTemplateFormatVersion?: AWSTemplateFormatVersion,
    Parameters?: Record<string, any>,
    Resources?: Record<string, any>,
    Outputs?: Record<string, any>
}

export { CloudFormationBase }
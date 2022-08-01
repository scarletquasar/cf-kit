import { AWSTemplateFormatVersion } from "./AWSTemplateFormatVersion"

type CloudFormationBase = {
    AWSTemplateFormatVersion?: AWSTemplateFormatVersion,
    Parameters?: Record<string, any>,
    Resources?: Record<string, any>
}

export { CloudFormationBase }
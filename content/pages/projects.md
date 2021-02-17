---
title: Projects
path: "projects"
---

# Projects

## Contributions to Popular Open-Source Projects

### Serverless Framework

The Serverless framework is a CLI tool for deploying Serverless applications. The support for the [Azure Functions plugin](https://github.com/serverless/serverless-azure-functions) was lacking (hadn't been a code commit in ~2 years), and there were several companies using Azure that were interesting in using the framework to deploy their workflows. Our team re-wrote the existing plugin to account for changes to Azure Functions and make the tool more robust for enterprise use. This has been one of my favorite projects that I have been involved in.

#### Serverless Framework Links

- [My contributions](https://github.com/serverless/serverless-azure-functions/pulls?utf8=%E2%9C%93&q=is%3Amerged+is%3Apr+author%3Atbarlow12+) to the plugin
- [Contributor graph](https://github.com/serverless/serverless-azure-functions/graphs/contributors)
- [My contributions](https://github.com/serverless/serverless-azure-functions/graphs/contributors) to the core framework
- [Blog post](https://serverless.com/blog/serverless-azure-functions-v1) for Serverless website

### VoTT (Visual Object Tagging Tool)

[VoTT](https://github.com/Microsoft/VoTT) is a popular open-source tool for the labeling of image and video data for computer vision model training. Our team [re-wrote the application](https://github.com/microsoft/VoTT/blob/master/CHANGELOG.md) to make it more extensible and reliable, as well as add many features that didn't previously exist.

#### VoTT Links

- [My contributions](https://github.com/microsoft/VoTT/pulls?utf8=%E2%9C%93&q=is%3Amerged+is%3Apr+author%3Atbarlow12+) to VoTT
- [Contributor graph](https://github.com/microsoft/VoTT/graphs/contributors)

### Cloud Custodian

- [My contributions](https://github.com/cloud-custodian/cloud-custodian/pulls?utf8=%E2%9C%93&q=is%3Amerged+is%3Apr+author%3Atbarlow12+) to Cloud Custodian

## Recent Personal Projects

### VSCode-Inspired Splash Page

Personal website with integrated terminal and VS Code styles

- [Repo](https://github.com/tbarlow12/tbarlow12.github.io)
- App content driven by single [manifest file](https://github.com/tbarlow12/tbarlow12.github.io/blob/dev/src/react/createManifest.ts)
- Content auto-generated from Markdown and published to master branch via [GitHub workflow](https://github.com/tbarlow12/tbarlow12.github.io/blob/dev/.github/workflows/deploy.yml)

### TaskBoardAssistant

Rule engine that allows people to set up policies for their tasks boards like Trello.

- [Repo](https://github.com/tbarlow12/task-board-assistant)
- [NuGet Package](https://www.nuget.org/packages/TaskBoardAssistant)
- [Example Policies](https://github.com/tbarlow12/task-board-assistant-policies)

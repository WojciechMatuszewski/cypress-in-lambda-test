FROM cypress/included:9.5.3

ARG FUNCTION_DIR="/function"

RUN apt-get update && \
    apt-get install -y \
    g++ \
    make \
    cmake \
    unzip \
    automake \
    libtool \
    autoconf \
    libcurl4-openssl-dev

RUN mkdir -p ${FUNCTION_DIR}

# TODO: Transpile from TypeScript. Use esbuild.
COPY handler.js ${FUNCTION_DIR}
COPY spec.js ${FUNCTION_DIR}

WORKDIR ${FUNCTION_DIR}

# aws-lambda-ric is the package that interfaces our handler with the AWS Lambda runtime
RUN npm install aws-lambda-ric

# Cypress should be installed globally, but the require("cypress") cannot find it
# Maybe we have to play around with the NODE_PATH? https://stackoverflow.com/questions/12594541/npm-global-install-cannot-find-module
RUN npm install cypress

# Non-overwrittable
ENTRYPOINT [ "/usr/local/bin/npx", "aws-lambda-ric" ]

# Overwrittable
CMD ["handler.handler"]

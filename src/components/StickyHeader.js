// Copyright 2021 16172
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Box } from "@chakra-ui/layout";

export default ({ children }) => (
  <Box
    maxWidth={900}
    my={4}
    py={4}
    mx="auto"
    bg="white"
    sx={{
      position: "-webkit-sticky",
      /* Safari */ position: "sticky",
      top: "0",
      zIndex: 10,
    }}
  >
    {children}
  </Box>
);

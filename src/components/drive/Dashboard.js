import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useFolder } from "../hooks/useFolder";
import AddFolderButton from "./AddFolderButton";
import AddFileButton from "./AddFileButton";
import AddLinkButton from "./AddLinkButton";
import Folder from "./Folder";
import NavbarComponent from "./NavbarComponent";
import { useParams, useLocation } from "react-router-dom";
import FolderBreadcrums from "./FolderBreadcrums";
import File from "./File";
import Link from "./Link";

export default function Dashboard() {
  const { folderId } = useParams();
  const { state = {} } = useLocation();
  const { folder, childFolders, childFiles, childLinks } = useFolder(
    folderId,
    state
  );
  // console.log(childFolders)
  return (
    <>
      <NavbarComponent />
      <Container fluid className="pt-2 pb-2">
        <div className="d-flex align-items-center">
          <FolderBreadcrums currentFolder={folder} />
          <AddFileButton currentFolder={folder} />
          <AddFolderButton currentFolder={folder} />
          <AddLinkButton currentFolder={folder} />
        </div>
        {childFolders.length > 0 && (
          <>
            <hr />
            <h3
              className="btn-light"
              style={{
                fontSize: "1.3rem",
                color: "black",
                width: "max-content",
                padding: " .2rem 2rem .2rem .2rem",
                borderRadius: ".5rem",
                backgroundColor: "#c2d2df5e",
              }}
            >
              Folders
            </h3>
          </>
        )}
        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map((childFolder) => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
        {childFolders.length > 0 && childFiles.length > 0 && (
          <>
            <hr />
            <h3
              style={{
                fontSize: "1.3rem",
                color: "black",
                width: "max-content",
                padding: " .2rem 2rem .2rem .2rem",
                borderRadius: ".5rem",
                backgroundColor: "#c2d2df5e",
              }}
            >
              Files
            </h3>
          </>
        )}
        {childFiles.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFiles.map((childFile) => (
              <div
                key={childFile.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <File file={childFile} />
              </div>
            ))}
          </div>
        )}
        {childFolders.length > 0 &&
          childFiles.length > 0 &&
          childLinks.length > 0 && (
            <>
              <hr />
              <h3
                style={{
                  fontSize: "1.3rem",
                  color: "black",
                  width: "max-content",
                  padding: " .2rem 2rem .2rem .2rem",
                  borderRadius: ".5rem",
                  backgroundColor: "#c2d2df5e",
                }}
              >
                Links
              </h3>
            </>
          )}
        {childLinks.length > 0 && (
          <div className="d-flex flex-wrap">
            {childLinks.map((childLink) => (
              <div
                key={childLink.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <Link link={childLink} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}

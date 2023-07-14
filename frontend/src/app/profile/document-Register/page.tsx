import React from "react";

interface Document {
  name: string;
  status: boolean;
  title: string;
  default_title: string;
  url?: string;
  filename: string;
  is_confirm?: boolean;
}

const DocumentsPage: React.FC<{ documents: Document[] }> = ({ documents }) => {
  return (
    <div className="documents-page">
      <div className="container">
        <a className="return-btn">Назад</a>
        <h1 className="documents-page__title">Справки и док-ты</h1>
        <span className="documents-page__subtitle">
          Справки для регистрации
        </span>
        <div className="documents-page__list">
          {/* {documents.map((document) => (
            <div
              className={`document-item ${
                document.status ? "document-item_success" : ""
              }`}
              data-name={document.name}
              key={document.name}
            >
              <div className="document-item__content">
                <h4
                  className="document-item__title"
                  title={document.title}
                  data-title={document.default_title}
                >
                  {document.title}
                </h4>
                {document.url && (
                  <a
                    target="_blank"
                    href={document.url ? document.url : "#"}
                    className={`document-item__description ${
                      document.url ? "document-item__description_link" : ""
                    }`}
                  >
                    {document.filename}
                  </a>
                )}
              </div>
              <div className="document-item__add">
                <label
                  htmlFor={document.name}
                  className="document-item__add-label"
                ></label>
                <input
                  type="file"
                  id={document.name}
                  className="document-item__add-file"
                />
              </div>
              {!document.is_confirm && (
                <div className="document-item__close"></div>
              )}
            </div>
          ))} */}
        </div>
        <div className="documents-page__footer">
          Помимо электроной версии, принесите в офис оригинал документа.
        </div>
      </div>
    </div>
  );
};

export default DocumentsPage;

import React, { useEffect, useRef, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  const editorRef = useRef<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const instance = editorRef.current?.getInstance?.();
    if (instance && typeof instance.setMarkdown === "function") {
      instance.setMarkdown(aiOutput);
    }
  }, [aiOutput]);

  const handleCopy = () => {
    navigator.clipboard.writeText(aiOutput);
  };

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your result</h2>
        <Button className="flex gap-2" onClick={handleCopy}>
          <Copy className="w-4 h-4" />
          Copy
        </Button>
      </div>

      {isClient && (
        <Editor
          ref={editorRef}
          initialValue="Your result will appear here"
          height="400px"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          onChange={() => {
            const instance = editorRef.current?.getInstance?.();
            console.log(instance?.getMarkdown());
          }}
        />
      )}
    </div>
  );
}

export default OutputSection;

import React, { useRef } from "react";
import Editor from "@monaco-editor/react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  const editorRef = useRef<any>(null);

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
  };

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

      <div className="h-[400px]">
        <Editor
          height="100%"
          language="markdown"
          value={aiOutput || "Your result will appear here"}
          onMount={handleEditorDidMount}
          options={{
            readOnly: true,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            fontSize: 14,
            wordWrap: "on",
            theme: "vs-light", // or "vs-dark" for dark mode
          }}
        />
      </div>
    </div>
  );
}

export default OutputSection;

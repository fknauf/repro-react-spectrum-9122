"use client";

import { ActionButton } from "@adobe/react-spectrum";
import { SyntheticEvent } from "react";

export default function Home() {
  const logEvent = (handler: string, e: SyntheticEvent<HTMLButtonElement>) => {
    console.log(handler, e.nativeEvent, e.eventPhase);
  };

  return <>
    <button
      data-cy="plain-btn"
      onBlur={e => logEvent("Blur", e)}
      onClick={e => logEvent("Click", e)}
      onFocus={e => logEvent("Focus", e)}
      onMouseEnter={e => logEvent("MouseEnter", e)}
      onMouseOver={e => logEvent("MouseOver", e)}
      onMouseDown={e => logEvent("MouseDown", e)}
      onMouseUp={e => logEvent("MouseUp", e)}
      onMouseLeave={e => logEvent("MouseLeave", e)}
      onMouseMove={e => logEvent("MouseMove", e)}
      onMouseOut={e => logEvent("MouseOut", e)}

      onAbort={e => logEvent("Abort", e)}
      onAbortCapture={e => logEvent("AbortCapture", e)}
      onAnimationEnd={e => logEvent("AnimationEnd", e)}
      onAnimationEndCapture={e => logEvent("AnimationEndCapture", e)}
      onAnimationIteration={e => logEvent("AnimationIteration", e)}
      onAnimationIterationCapture={e => logEvent("AnimationIterationCapture", e)}
      onAnimationStart={e => logEvent("AnimationStart", e)}
      onAnimationStartCapture={e => logEvent("AnimationStartCapture", e)}
      onAuxClick={e => logEvent("AuxClick", e)}
      onAuxClickCapture={e => logEvent("AuxClickCapture", e)}
      onBeforeInput={e => logEvent("BeforeInput", e)}
      onBeforeInputCapture={e => logEvent("BeforeInputCapture", e)}
      onBeforeToggle={e => logEvent("BeforeToggle", e)}
      onBlurCapture={e => logEvent("BlurCapture", e)}
      onCanPlay={e => logEvent("CanPlay", e)}
      onCanPlayCapture={e => logEvent("CanPlayCapture", e)}
      onCanPlayThrough={e => logEvent("CanPlayThrough", e)}
      onCanPlayThroughCapture={e => logEvent("CanPlayThroughCapture", e)}
      onChange={e => logEvent("Change", e)}
      onChangeCapture={e => logEvent("ChangeCapture", e)}
      onClickCapture={e => logEvent("ClickCapture", e)}
      onCompositionEnd={e => logEvent("CompositionEnd", e)}
      onCompositionEndCapture={e => logEvent("CompositionEndCapture", e)}
      onCompositionStart={e => logEvent("CompositionStart", e)}
      onCompositionStartCapture={e => logEvent("CompositionStartCapture", e)}
      onCompositionUpdate={e => logEvent("CompositionUpdate", e)}
      onCompositionUpdateCapture={e => logEvent("CompositionUpdateCapture", e)}
      onContextMenu={e => logEvent("ContextMenu", e)}
      onContextMenuCapture={e => logEvent("ContextMenuCapture", e)}
      onCopy={e => logEvent("Copy", e)}
      onCopyCapture={e => logEvent("CopyCapture", e)}
      onCut={e => logEvent("Cut", e)}
      onCutCapture={e => logEvent("CutCapture", e)}
      onDoubleClick={e => logEvent("DoubleClick", e)}
      onDoubleClickCapture={e => logEvent("DoubleClickCapture", e)}
      onDrag={e => logEvent("Drag", e)}
      onDragCapture={e => logEvent("DragCapture", e)}
      onDragEnd={e => logEvent("DragEnd", e)}
      onDragEndCapture={e => logEvent("DragEndCapture", e)}
      onDragEnter={e => logEvent("DragEnter", e)}
      onDragEnterCapture={e => logEvent("DragEnterCapture", e)}
      onDragExit={e => logEvent("DragExit", e)}
      onDragExitCapture={e => logEvent("DragExitCapture", e)}
      onDragLeave={e => logEvent("DragLeave", e)}
      onDragLeaveCapture={e => logEvent("DragLeaveCapture", e)}
      onDragOver={e => logEvent("DragOver", e)}
      onDragOverCapture={e => logEvent("DragOverCapture", e)}
      onDragStart={e => logEvent("DragStart", e)}
      onDragStartCapture={e => logEvent("DragStartCapture", e)}
      onDrop={e => logEvent("Drop", e)}
      onDropCapture={e => logEvent("DropCapture", e)}
      onDurationChange={e => logEvent("DurationChange", e)}
      onDurationChangeCapture={e => logEvent("DurationChangeCapture", e)}
      onEmptied={e => logEvent("Emptied", e)}
      onEmptiedCapture={e => logEvent("EmptiedCapture", e)}
      onEncrypted={e => logEvent("Encrypted", e)}
      onEncryptedCapture={e => logEvent("EncryptedCapture", e)}
      onEnded={e => logEvent("Ended", e)}
      onEndedCapture={e => logEvent("EndedCapture", e)}
      onError={e => logEvent("Error", e)}
      onErrorCapture={e => logEvent("ErrorCapture", e)}
      onFocusCapture={e => logEvent("FocusCapture", e)}
      onGotPointerCapture={e => logEvent("GotPointerCapture", e)}
      onGotPointerCaptureCapture={e => logEvent("GotPointerCaptureCapture", e)}
      onInput={e => logEvent("Input", e)}
      onInputCapture={e => logEvent("InputCapture", e)}
      onInvalid={e => logEvent("Invalid", e)}
      onInvalidCapture={e => logEvent("InvalidCapture", e)}
      onKeyDown={e => logEvent("KeyDown", e)}
      onKeyDownCapture={e => logEvent("KeyDownCapture", e)}
      onKeyUp={e => logEvent("KeyUp", e)}
      onKeyUpCapture={e => logEvent("KeyUpCapture", e)}
      onLoad={e => logEvent("Load", e)}
      onLoadCapture={e => logEvent("LoadCapture", e)}
      onLoadStart={e => logEvent("LoadStart", e)}
      onLoadStartCapture={e => logEvent("LoadStartCapture", e)}
      onLoadedData={e => logEvent("LoadedData", e)}
      onLoadedDataCapture={e => logEvent("LoadedDataCapture", e)}
      onLoadedMetadata={e => logEvent("LoadedMetadata", e)}
      onLoadedMetadataCapture={e => logEvent("LoadedMetadataCapture", e)}
      onLostPointerCapture={e => logEvent("LostPointerCapture", e)}
      onLostPointerCaptureCapture={e => logEvent("LostPointerCaptureCapture", e)}
      onMouseDownCapture={e => logEvent("MouseDownCapture", e)}
      onMouseMoveCapture={e => logEvent("MouseMoveCapture", e)}
      onMouseOutCapture={e => logEvent("MouseOutCapture", e)}
      onMouseOverCapture={e => logEvent("MouseOverCapture", e)}
      onMouseUpCapture={e => logEvent("MouseUpCapture", e)}
      onPaste={e => logEvent("Paste", e)}
      onPasteCapture={e => logEvent("PasteCapture", e)}
      onPause={e => logEvent("Pause", e)}
      onPauseCapture={e => logEvent("PauseCapture", e)}
      onPlay={e => logEvent("Play", e)}
      onPlayCapture={e => logEvent("PlayCapture", e)}
      onPlaying={e => logEvent("Playing", e)}
      onPlayingCapture={e => logEvent("PlayingCapture", e)}
      onPointerCancel={e => logEvent("PointerCancel", e)}
      onPointerCancelCapture={e => logEvent("PointerCancelCapture", e)}
      onPointerDown={e => logEvent("PointerDown", e)}
      onPointerDownCapture={e => logEvent("PointerDownCapture", e)}
      onPointerEnter={e => logEvent("PointerEnter", e)}
      onPointerLeave={e => logEvent("PointerLeave", e)}
      onPointerMove={e => logEvent("PointerMove", e)}
      onPointerMoveCapture={e => logEvent("PointerMoveCapture", e)}
      onPointerOut={e => logEvent("PointerOut", e)}
      onPointerOutCapture={e => logEvent("PointerOutCapture", e)}
      onPointerOver={e => logEvent("PointerOver", e)}
      onPointerOverCapture={e => logEvent("PointerOverCapture", e)}
      onPointerUp={e => logEvent("PointerUp", e)}
      onPointerUpCapture={e => logEvent("PointerUpCapture", e)}
      onProgress={e => logEvent("Progress", e)}
      onProgressCapture={e => logEvent("ProgressCapture", e)}
      onRateChange={e => logEvent("RateChange", e)}
      onRateChangeCapture={e => logEvent("RateChangeCapture", e)}
      onReset={e => logEvent("Reset", e)}
      onResetCapture={e => logEvent("ResetCapture", e)}
      onScroll={e => logEvent("Scroll", e)}
      onScrollCapture={e => logEvent("ScrollCapture", e)}
      onScrollEnd={e => logEvent("ScrollEnd", e)}
      onScrollEndCapture={e => logEvent("ScrollEndCapture", e)}
      onSeeked={e => logEvent("Seeked", e)}
      onSeekedCapture={e => logEvent("SeekedCapture", e)}
      onSeeking={e => logEvent("Seeking", e)}
      onSeekingCapture={e => logEvent("SeekingCapture", e)}
      onSelect={e => logEvent("Select", e)}
      onSelectCapture={e => logEvent("SelectCapture", e)}
      onStalled={e => logEvent("Stalled", e)}
      onStalledCapture={e => logEvent("StalledCapture", e)}
      onSubmit={e => logEvent("Submit", e)}
      onSubmitCapture={e => logEvent("SubmitCapture", e)}
      onSuspend={e => logEvent("Suspend", e)}
      onSuspendCapture={e => logEvent("SuspendCapture", e)}
      onTimeUpdate={e => logEvent("TimeUpdate", e)}
      onTimeUpdateCapture={e => logEvent("TimeUpdateCapture", e)}
      onToggle={e => logEvent("Toggle", e)}
      onTouchCancel={e => logEvent("TouchCancel", e)}
      onTouchCancelCapture={e => logEvent("TouchCancelCapture", e)}
      onTouchEnd={e => logEvent("TouchEnd", e)}
      onTouchEndCapture={e => logEvent("TouchEndCapture", e)}
      onTouchMove={e => logEvent("TouchMove", e)}
      onTouchMoveCapture={e => logEvent("TouchMoveCapture", e)}
      onTouchStart={e => logEvent("TouchStart", e)}
      onTouchStartCapture={e => logEvent("TouchStartCapture", e)}
      onTransitionCancel={e => logEvent("TransitionCancel", e)}
      onTransitionCancelCapture={e => logEvent("TransitionCancelCapture", e)}
      onTransitionEnd={e => logEvent("TransitionEnd", e)}
      onTransitionEndCapture={e => logEvent("TransitionEndCapture", e)}
      onTransitionRun={e => logEvent("TransitionRun", e)}
      onTransitionRunCapture={e => logEvent("TransitionRunCapture", e)}
      onTransitionStart={e => logEvent("TransitionStart", e)}
      onTransitionStartCapture={e => logEvent("TransitionStartCapture", e)}
      onVolumeChange={e => logEvent("VolumeChange", e)}
      onVolumeChangeCapture={e => logEvent("VolumeChangeCapture", e)}
      onWaiting={e => logEvent("Waiting", e)}
      onWaitingCapture={e => logEvent("WaitingCapture", e)}
      onWheel={e => logEvent("Wheel", e)}
      onWheelCapture={e => logEvent("WheelCapture", e)}
      onKeyPress={e => logEvent("KeyPress", e)}
      onKeyPressCapture={e => logEvent("KeyPressCapture", e)}
    >
      Plain
    </button>
    <ActionButton data-cy="spectrum-btn">
      Spectrum
    </ActionButton>
  </>;
}
